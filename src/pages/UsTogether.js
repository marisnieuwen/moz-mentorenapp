import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Alert,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import Emoji5 from "../images/emoji-5.svg";
import Emoji4 from "../images/emoji-4.svg";
import Emoji3 from "../images/emoji-3.svg";
import Emoji2 from "../images/emoji-2.svg";
import Emoji1 from "../images/emoji-1.svg";
import TopCard from "../components/TopCard";
import SuccessModal from "../components/SuccesModal"; // Adjust the path accordingly
import userData from "../userData.json";

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
  flexWrap: "wrap",
});

const RowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  alignContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "1.25rem",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const TopContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
});

const Card = styled(Box)({
  backgroundColor: "#FEFEFE",
  borderRadius: "12px",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  padding: "var(--2, 1rem) 0.625rem",
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.75rem",
  flexShrink: 0,
  width: "24.375rem",
});

const QuestionHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
});

const QuestionText = styled(Typography)({
  marginLeft: "0.5rem",
});

const AnswerContainer = styled(Box)({
  display: "flex",
  alignSelf: "stretch",
  width: "100%",
  gap: "6rem",
  padding: "0 2rem",
});

const AnswerText = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const AnswerEmoji = styled(Box)({
  flexDirection: "row",
  display: "flex",
  justifyContent: "center",
  gap: "0.7rem",
  alignItems: "center",
  marginTop: "0.5rem",
});

const Emoji = styled("img")({
  width: "2rem",
  height: "2rem",
  marginLeft: "0.5rem",
});

const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "1rem",
  gap: "1rem",
});

const StyledButton = styled(Button)(({ variant }) => ({
  display: "flex",
  height: "3.625rem",
  padding: "0.8125rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem",
  flex: "1 0 0",
  borderRadius: "0.375rem",
  ...(variant === "outlined"
    ? { color: "#182C61", border: "2px solid #182C61" }
    : { background: "#182C61", color: "#fff" }),
}));

const UsTogether = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { scanData } = location.state || {};

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // State variables for editable fields
  const [editedData, setEditedData] = useState({
    menteeVraag1: scanData.emojiRatings.question1.menteeScore,
    mentorVraag1: scanData.emojiRatings.question1.mentorScore,
    menteeVraag2: scanData.emojiRatings.question2.menteeScore,
    mentorVraag2: scanData.emojiRatings.question2.mentorScore,
    menteeVraag3: scanData.textData.mentee,
    mentorVraag3: scanData.textData.mentor,
  });

  // Helper function to map ratings to emojis
  const getEmoji = (rating) => {
    switch (rating) {
      case 5:
        return <Emoji src={Emoji5} alt="Very Good" />;
      case 4:
        return <Emoji src={Emoji4} alt="Good" />;
      case 3:
        return <Emoji src={Emoji3} alt="Average" />;
      case 2:
        return <Emoji src={Emoji2} alt="Not Good" />;
      case 1:
        return <Emoji src={Emoji1} alt="Very Bad" />;
      default:
        return "❓"; // Unknown
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Function to send data to Firebase
  const handleSend = async () => {
    try {
      // Combine the scan data with the user data
      const userScanData = {
        ...userData,
        mentee_vraag1: editedData.menteeVraag1,
        mentee_vraag2: editedData.menteeVraag2,
        mentee_vraag3: editedData.menteeVraag3,
        mentor_vraag1: editedData.mentorVraag1,
        mentor_vraag2: editedData.mentorVraag2,
        mentor_vraag3: editedData.mentorVraag3,
        timestamp: new Date().toISOString(), // Add timestamp
        mentor: {
          ...userData.mentor,
          mentorMenteeRelatieId: `data-from-webapp-${Date.now()}`, // Ensure a unique ID for each submission
        },
      };

      // Define the path to the specific collection in Firestore
      const bandMentorMenteeCollectionRef = collection(
        firestore,
        "evaluaties",
        "tussentijds",
        "Band Mentor-Mentee"
      );

      // Create a document reference with a unique ID
      const docRef = doc(
        bandMentorMenteeCollectionRef,
        userScanData.mentor.mentorMenteeRelatieId
      );

      // Send the combined data to the specified document in Firebase
      await setDoc(docRef, userScanData);

      setIsModalOpen(true); // Open the success modal
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
      alert("Failed to send data to the database.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
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
            text="Tussentijdse Evaluatie: Wij Samen"
            showTooltip={true}
            variant="h5"
          />
        </TopContainer>
        <RowContainer>
          <Alert severity="info" sx={{ mb: 2, width: "100%" }}>
            Controleer goed of de antwoorden overeenkomen. Je kunt de antwoorden
            ook bewerken.
          </Alert>
          {scanData && scanData.emojiRatings && scanData.textData ? (
            <>
              <Card>
                <QuestionHeader>
                  <Typography variant="h5">Vraag 1:</Typography>
                  <QuestionText variant="body2">
                    Ik kijk elke week uit naar Mentoren op Zuid
                  </QuestionText>
                </QuestionHeader>
                <AnswerContainer>
                  <AnswerText>
                    <Typography variant="body2">
                      Antwoord <strong>Mentor</strong>
                    </Typography>
                    {isEditing ? (
                      <AnswerEmoji>
                        <FormControl fullWidth>
                          <InputLabel>Mentor</InputLabel>
                          <Select
                            value={editedData.mentorVraag1}
                            name="mentorVraag1"
                            onChange={handleInputChange}
                          >
                            <MenuItem value={5}>5 {getEmoji(5)}</MenuItem>
                            <MenuItem value={4}>4 {getEmoji(4)}</MenuItem>
                            <MenuItem value={3}>3 {getEmoji(3)}</MenuItem>
                            <MenuItem value={2}>2 {getEmoji(2)}</MenuItem>
                            <MenuItem value={1}>1 {getEmoji(1)}</MenuItem>
                          </Select>
                        </FormControl>
                      </AnswerEmoji>
                    ) : (
                      <AnswerEmoji>
                        {getEmoji(editedData.mentorVraag1)}(
                        {editedData.mentorVraag1})
                      </AnswerEmoji>
                    )}
                  </AnswerText>
                  <AnswerText>
                    <Typography variant="body2">
                      Antwoord <strong>Mentee</strong>
                    </Typography>
                    {isEditing ? (
                      <AnswerEmoji>
                        <FormControl fullWidth>
                          <InputLabel>Mentee</InputLabel>
                          <Select
                            value={editedData.menteeVraag1}
                            name="menteeVraag1"
                            onChange={handleInputChange}
                          >
                            <MenuItem value={5}>5 {getEmoji(5)}</MenuItem>
                            <MenuItem value={4}>4 {getEmoji(4)}</MenuItem>
                            <MenuItem value={3}>3 {getEmoji(3)}</MenuItem>
                            <MenuItem value={2}>2 {getEmoji(2)}</MenuItem>
                            <MenuItem value={1}>1 {getEmoji(1)}</MenuItem>
                          </Select>
                        </FormControl>
                      </AnswerEmoji>
                    ) : (
                      <AnswerEmoji>
                        {getEmoji(editedData.menteeVraag1)}(
                        {editedData.menteeVraag1})
                      </AnswerEmoji>
                    )}
                  </AnswerText>
                </AnswerContainer>
              </Card>

              <Card>
                <QuestionHeader>
                  <Typography variant="h5">Vraag 2:</Typography>
                  <QuestionText variant="body2">
                    Ben je blij met hoe we problemen samen oplossen?
                  </QuestionText>
                </QuestionHeader>
                <AnswerContainer>
                  <AnswerText>
                    <Typography variant="body2">
                      Antwoord <strong>Mentor</strong>
                    </Typography>
                    {isEditing ? (
                      <AnswerEmoji>
                        <FormControl fullWidth>
                          <InputLabel>Mentor</InputLabel>
                          <Select
                            value={editedData.mentorVraag2}
                            name="mentorVraag2"
                            onChange={handleInputChange}
                          >
                            <MenuItem value={5}>5 {getEmoji(5)}</MenuItem>
                            <MenuItem value={4}>4 {getEmoji(4)}</MenuItem>
                            <MenuItem value={3}>3 {getEmoji(3)}</MenuItem>
                            <MenuItem value={2}>2 {getEmoji(2)}</MenuItem>
                            <MenuItem value={1}>1 {getEmoji(1)}</MenuItem>
                          </Select>
                        </FormControl>
                      </AnswerEmoji>
                    ) : (
                      <AnswerEmoji>
                        {getEmoji(editedData.mentorVraag2)}(
                        {editedData.mentorVraag2})
                      </AnswerEmoji>
                    )}
                  </AnswerText>
                  <AnswerText>
                    <Typography variant="body2">
                      Antwoord <strong>Mentee</strong>
                    </Typography>
                    {isEditing ? (
                      <AnswerEmoji>
                        <FormControl fullWidth>
                          <InputLabel>Mentee</InputLabel>
                          <Select
                            value={editedData.menteeVraag2}
                            name="menteeVraag2"
                            onChange={handleInputChange}
                          >
                            <MenuItem value={5}>5 {getEmoji(5)}</MenuItem>
                            <MenuItem value={4}>4 {getEmoji(4)}</MenuItem>
                            <MenuItem value={3}>3 {getEmoji(3)}</MenuItem>
                            <MenuItem value={2}>2 {getEmoji(2)}</MenuItem>
                            <MenuItem value={1}>1 {getEmoji(1)}</MenuItem>
                          </Select>
                        </FormControl>
                      </AnswerEmoji>
                    ) : (
                      <AnswerEmoji>
                        {getEmoji(editedData.menteeVraag2)}(
                        {editedData.menteeVraag2})
                      </AnswerEmoji>
                    )}
                  </AnswerText>
                </AnswerContainer>
              </Card>

              <Card>
                <QuestionHeader>
                  <Typography variant="h5">Vraag 3:</Typography>
                  <QuestionText variant="body2">
                    Waar kijk je naar uit als we samen zijn?
                  </QuestionText>
                </QuestionHeader>
                <AnswerContainer>
                  <AnswerText>
                    <Typography variant="body2">
                      Antwoord <strong>Mentor </strong>
                    </Typography>
                    {isEditing ? (
                      <TextareaAutosize
                        minRows={3}
                        style={{ width: "100%" }}
                        name="mentorVraag3"
                        value={editedData.mentorVraag3}
                        onChange={handleInputChange}
                      />
                    ) : (
                      editedData.mentorVraag3
                    )}
                  </AnswerText>
                  <AnswerText>
                    <Typography variant="body2">
                      Antwoord <strong>Mentee</strong>
                    </Typography>
                    {isEditing ? (
                      <TextareaAutosize
                        minRows={3}
                        style={{ width: "100%" }}
                        name="menteeVraag3"
                        value={editedData.menteeVraag3}
                        onChange={handleInputChange}
                      />
                    ) : (
                      editedData.menteeVraag3
                    )}
                  </AnswerText>
                </AnswerContainer>
              </Card>

              <ButtonContainer>
                {!isEditing && (
                  <StyledButton variant="outlined" onClick={handleEditClick}>
                    Bewerken
                  </StyledButton>
                )}
                {isEditing ? (
                  <StyledButton onClick={handleSaveClick}>Opslaan</StyledButton>
                ) : (
                  <StyledButton onClick={handleSend}>Verzenden</StyledButton>
                )}
              </ButtonContainer>
            </>
          ) : (
            <Typography variant="body1">
              Geen gegevens gevonden. Maak een nieuwe scan.
            </Typography>
          )}
        </RowContainer>
      </Box>

      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </ContentContainer>
  );
};

export default UsTogether;
