// const express = require("express");
// const { AzureKeyCredential } = require("@azure/core-auth");
// const createClient = require("@azure-rest/ai-vision-image-analysis").default;
// const multer = require("multer");
// const dotenv = require("dotenv");
// const fs = require("fs");
// const cors = require("cors");

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// const endpoint = process.env.REACT_APP_VISION_ENDPOINT;
// const key = process.env.REACT_APP_VISION_KEY;

if (!endpoint || !key) {
  throw new Error(
    "REACT_APP_VISION_ENDPOINT and REACT_APP_VISION_KEY must be set in the environment variables."
  );
}

const credential = new AzureKeyCredential(key);
const client = createClient(endpoint, credential);

const features = [
  "Caption",
  "DenseCaptions",
  "Objects",
  "Read",
  "SmartCrops",
  "Tags",
];

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Enable CORS for all routes
app.use(cors());

const analyzeImage = async (imageBuffer) => {
  try {
    const result = await client.path("/imageanalysis:analyze").post({
      body: imageBuffer,
      queryParameters: {
        features: features.join(","),
        "gender-neutral-captions": "true",
        "smartCrops-aspect-ratios": "0.9,1.33",
      },
      headers: {
        "Content-Type": "application/octet-stream",
        "Ocp-Apim-Subscription-Key": key,
      },
    });

    const iaResult = result.body;
    const outputPath = "analysisResultBackend.json"; // Path to save the result

    // Write analysis results to JSON-file
    fs.writeFileSync(outputPath, JSON.stringify(iaResult, null, 2), "utf8");
    console.log(`Analysis result saved to ${outputPath}`);

    // Extract answers based on the new structure
    const answers = extractAnswers(
      iaResult.readResult.blocks,
      iaResult.denseCaptionsResult.values
    );
    const answersPath = "answersBackend.json";
    fs.writeFileSync(answersPath, JSON.stringify(answers, null, 2), "utf8");
    console.log(`Extracted answers saved to ${answersPath}`);

    return answers; // Return only the answers
  } catch (error) {
    console.error(
      "Error analyzing image:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const processQuestion3 = (blocks, references, answers) => {
  let currentSection = null;

  blocks.forEach((block) => {
    block.lines.forEach((line) => {
      const text = line.text.toLowerCase();
      const yPosition = line.boundingPolygon[0].y;
      const xPosition = line.boundingPolygon[0].x;

      if (
        yPosition > references.question3.y &&
        xPosition >= references.question3.x - 50 &&
        xPosition <= references.question3.x + 50
      ) {
        if (text.includes("mentor")) {
          currentSection = "mentor";
        } else if (text.includes("mentee")) {
          currentSection = "mentee";
        } else if (currentSection) {
          answers.question3[currentSection] += `${line.text} `;
        }
      }
    });
  });

  // Combine lines into sentences and format them correctly
  answers.question3.mentor = formatAnswer(
    combineLines(answers.question3.mentor.trim().split(" "))
  );
  answers.question3.mentee = formatAnswer(
    combineLines(answers.question3.mentee.trim().split(" "))
  );

  return answers;
};

const processQuestionsWithSmileys = (
  blocks,
  references,
  answers,
  smileys,
  colorToScore
) => {
  blocks.forEach((block) => {
    block.lines.forEach((line) => {
      const text = line.text.toLowerCase();
      const yPosition = line.boundingPolygon[0].y;
      const xPosition = line.boundingPolygon[0].x;

      // Process answers for question 1 and 2 based on y-position
      if (
        yPosition > references.question1.y &&
        yPosition < references.question2.y
      ) {
        // Process answers for question 1
        if (text.includes("mentor")) {
          answers.question1.mentor = line.text; // Save mentor text if needed
        } else if (text.includes("mentee")) {
          answers.question1.mentee = line.text; // Save mentee text if needed
        }
      } else if (yPosition > references.question2.y) {
        // Process answers for question 2
        if (text.includes("mentor")) {
          answers.question2.mentor = line.text; // Save mentor text if needed
        } else if (text.includes("mentee")) {
          answers.question2.mentee = line.text; // Save mentee text if needed
        }
      }
    });
  });

  // Find and assign the corresponding smileys to question 1 and 2
  smileys.forEach((smiley) => {
    const score = colorToScore[smiley.color];
    if (
      smiley.y > references.question1.y &&
      smiley.y < references.question2.y
    ) {
      if (answers.question1.mentorScore === null) {
        answers.question1.mentorScore = score;
      } else {
        answers.question1.menteeScore = score;
      }
    } else if (smiley.y > references.question2.y) {
      if (answers.question2.mentorScore === null) {
        answers.question2.mentorScore = score;
      } else {
        answers.question2.menteeScore = score;
      }
    }
  });

  // Remove unnecessary mentor and mentee texts
  delete answers.question1.mentor;
  delete answers.question1.mentee;
  delete answers.question2.mentor;
  delete answers.question2.mentee;

  return answers;
};

const extractAnswers = (blocks, denseCaptions) => {
  const answers = {
    question1: { mentorScore: null, menteeScore: null },
    question2: { mentorScore: null, menteeScore: null },
    question3: { mentor: "", mentee: "" },
  };

  const references = {
    question1: { x: null, y: null },
    question2: { x: null, y: null },
    question3: { x: null, y: null },
  };

  // Zoek de y-positie en x-positie van "Antwoorden op vraag 1", "Antwoorden op vraag 2" en "Antwoorden op vraag 3"
  blocks.forEach((block) => {
    block.lines.forEach((line) => {
      const text = line.text.toLowerCase();
      if (text.includes("antwoorden op vraag 1")) {
        references.question1.y = line.boundingPolygon[0].y;
        references.question1.x = line.boundingPolygon[0].x;
      } else if (text.includes("antwoorden op vraag 2")) {
        references.question2.y = line.boundingPolygon[0].y;
        references.question2.x = line.boundingPolygon[0].x;
      } else if (text.includes("antwoorden op vraag 3")) {
        references.question3.y = line.boundingPolygon[0].y;
        references.question3.x = line.boundingPolygon[0].x;
      }
    });
  });

  Object.values(references).forEach((reference) => {
    if (reference.y === null || reference.x === null) {
      throw new Error("Reference text for questions not found.");
    }
  });

  // Verwerk vraag 3 apart
  processQuestion3(blocks, references, answers);

  // Map colors to scores
  const colorToScore = {
    green: 5,
    blue: 4,
    yellow: 3,
    pink: 2,
    red: 1,
  };

  // Sorteer de dense captions op y-positie en vervolgens op x-positie
  denseCaptions.sort((a, b) => {
    if (a.boundingBox.y === b.boundingBox.y) {
      return a.boundingBox.x - b.boundingBox.x;
    }
    return a.boundingBox.y - b.boundingBox.y;
  });

  // Verwerk de dense captions voor emoji's in volgorde
  const smileys = denseCaptions
    .filter((caption) => caption.text.match(/(green|blue|yellow|pink|red)/i))
    .map((caption) => {
      const colorMatch = caption.text.match(/(green|blue|yellow|pink|red)/i);
      const color = colorMatch[1].toLowerCase();
      return {
        color: color,
        y: caption.boundingBox.y,
        x: caption.boundingBox.x,
      };
    });

  // Process questions 1 and 2 to assign smileys
  processQuestionsWithSmileys(
    blocks,
    references,
    answers,
    smileys,
    colorToScore
  );

  return answers;
};

const combineLines = (lines) => {
  let combined = [];
  let current = "";

  lines.forEach((line) => {
    if (line.endsWith(".") || line.endsWith("!") || line.endsWith("?")) {
      current += " " + line;
      combined.push(current.trim());
      current = "";
    } else {
      current += " " + line;
    }
  });

  if (current) {
    combined.push(current.trim());
  }

  return combined.join(". ");
};

const formatAnswer = (text) => {
  return text
    .split(". ")
    .map(
      (sentence) =>
        sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
    )
    .join(". ");
};

app.post("/analyze-image", upload.single("image"), async (req, res) => {
  try {
    console.log("Received image for analysis");
    const imageBuffer = req.file.buffer;

    console.log("Image buffer size:", imageBuffer.length);

    const answers = await analyzeImage(imageBuffer);

    res.json(answers);
  } catch (error) {
    console.error("Error analyzing image:", error);
    res.status(500).json({
      error: error.message || "Unknown error occurred during image analysis",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
