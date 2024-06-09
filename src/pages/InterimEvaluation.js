import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import TopCard from "../components/TopCard";
import EvaluationItemCard from "../components/EvaluationItemCard";
import wijSamenIcon from "../images/icon-band.svg";
import terugblikIcon from "../images/icon-terugblik.svg";
import doelenIcon from "../images/icon-doelen.svg";
import motivatieIcon from "../images/icon-motivatie.svg";
import sfeerIcon from "../images/icon-sfeer.svg";
import mozIcon from "../images/icon-moz.svg";
import { useNavigate } from "react-router-dom";
import BestandUploadModal from "../components/FileUploadModal";

const ContentContainer = styled(Box)({
  width: "100%",
  maxWidth: "75rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  justifyContent: "center",
  padding: "0rem 0rem 0.5rem",
  flexGrow: 1,
});

const RowContainer = styled(Box)({
  display: "flex",
  width: "100%",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "1.25rem",
});

const TopContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
});

const CardContainer = styled(Card)({
  backgroundColor: "#FEFEFE",
  borderRadius: "0.75rem",
  boxShadow:
    "-2px 21px 6px 0px rgba(0, 0, 0, 0.00), -1px 14px 5px 0px rgba(0, 0, 0, 0.01), -1px 8px 5px 0px rgba(0, 0, 0, 0.03), 0px 3px 3px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  padding: "var(--2, 1rem) 0.625rem",
  width: "100%",
  maxWidth: "24.375rem",
  border: "0.5px solid rgba(2, 2, 2, 0.13)",
});

const InterimEvaluations = () => {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCapture = (answers) => {
    const scanData = {
      emojiRatings: {
        question1: {
          mentorScore: answers.question1.mentorScore,
          menteeScore: answers.question1.menteeScore,
        },
        question2: {
          mentorScore: answers.question2.mentorScore,
          menteeScore: answers.question2.menteeScore,
        },
      },
      textData: {
        mentor: answers.question3.mentor,
        mentee: answers.question3.mentee,
      },
    };
    navigate("/evaluaties/tussentijdse/wij-samen", { state: { scanData } });
  };

  const handleScanClick = (path) => {
    setCurrentPath(path);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContentContainer>
      <Box
        mt={3.5}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TopContainer>
          <TopCard
            text="Tussentijdse Evaluatie"
            showTooltip={true}
            variant="h5"
          />
        </TopContainer>
        <RowContainer>
          <CardContainer>
            <CardContent>
              <Typography variant="h6">Thema's</Typography>
              <Typography variant="body1">
                Upload per thema de bijbehorende pagina uit het evaluatieboek
                die je samen met je mentee hebt ingevuld. Zorg ervoor dat de
                foto's scherp en duidelijk zijn en de volledige pagina zichtbaar
                is.
              </Typography>
              <Typography variant="body4" sx={{ mt: 5 }}>
                Foto's worden niet opgeslagen, alleen de antwoorden woorden
                geanalyseerd.
              </Typography>
            </CardContent>
          </CardContainer>
          <EvaluationItemCard
            title="Wij Samen"
            description="Over hoe jullie samenwerken tijdens MoZ."
            buttonText="Uploaden"
            buttonColor="#93C19B"
            icon={wijSamenIcon}
            onClick={() =>
              handleScanClick("/evaluaties/tussentijdse/wij-samen")
            }
          />
          <EvaluationItemCard
            title="Terugblik"
            description="Over de waarde van een mentor/mentee."
            buttonText="Uploaden"
            buttonColor="#8B67C2"
            icon={terugblikIcon}
            disabled={true}
          />
          <EvaluationItemCard
            title="Doelen"
            description="Over het bereiken van gestelde doelen."
            buttonText="Uploaden"
            buttonColor="#FF8743"
            icon={doelenIcon}
            disabled={true}
          />
          <EvaluationItemCard
            title="Motivatie"
            description="Over jullie motivatie tijdens het traject."
            buttonText="Uploaden"
            buttonColor="#D9644A"
            icon={motivatieIcon}
            disabled={true}
          />
          <EvaluationItemCard
            title="Sfeer"
            description="Over de sfeer tijdens jullie bijeenkomsten."
            buttonText="Uploaden"
            buttonColor="#4E758C"
            icon={sfeerIcon}
            disabled={true}
          />
          <EvaluationItemCard
            title="MoZ"
            description="Over jou ervaringen met het MoZ-programma."
            buttonText="Uploaden"
            buttonColor="#4E758C"
            icon={mozIcon}
            disabled={true}
          />
        </RowContainer>
      </Box>
      <BestandUploadModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onCapture={handleCapture}
        currentPath={currentPath}
      />
    </ContentContainer>
  );
};

export default InterimEvaluations;
