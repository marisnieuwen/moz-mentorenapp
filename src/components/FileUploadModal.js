import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Input,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const BestandUploadModal = ({ open, onClose, onCapture }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (selectedFile) {
      try {
        setMessage("Bestand wordt geanalyseerd...");
        setLoading(true);
        console.log("Analysing starting now...");

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
          const response = await axios.post(
            "https://moz-backend.azurewebsites.net/analyze-image",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          const answers = response.data;

          setMessage("Analysegegevens ontvangen");
          setLoading(false);
          console.log("Extracted answers:", answers);

          onCapture(answers);
          onClose(); // Sluit de modal na het analyseren
        } catch (error) {
          console.error(
            "Fout bij het verwerken van de analyse van de afbeelding:",
            error
          );
          setMessage("Fout bij het verwerken van de analyse van de afbeelding");
          setLoading(false);
        }
      } catch (error) {
        console.error(
          "Fout bij het verwerken van de analyse van de afbeelding:",
          error
        );
        setMessage("Fout bij het verwerken van de analyse van de afbeelding");
        setLoading(false);
      }
    } else {
      setMessage("Selecteer eerst een bestand.");
    }
  };

  const CustomButton = styled(Button)(({ variant }) => ({
    display: "flex",
    padding: "0.6rem 0.9rem",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1.6rem",
    borderRadius: "0.375rem",
    textTransform: "none", // Zorg ervoor dat de tekst niet in hoofdletters staat
    ...(variant === "outlined"
      ? { color: "#182C61", border: "1px solid #182C61" }
      : { background: "#182C61", color: "#fff" }),
  }));

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle variant="h5">Upload en Analyseer Bestand</DialogTitle>
      <DialogContent>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress sx={{ color: "#6951C6" }} />
            <Typography variant="body1" mt={2}>
              Antwoorden van de evaluatie worden gescand, even geduld...
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="body1" color="error">
              {message}
            </Typography>
            <Input type="file" accept="image/*" onChange={handleFileChange} />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <CustomButton variant="outlined" onClick={onClose} disabled={loading}>
          Annuleren
        </CustomButton>
        <CustomButton
          variant="contained"
          onClick={handleAnalyze}
          disabled={loading}
        >
          Analyseren
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default BestandUploadModal;
