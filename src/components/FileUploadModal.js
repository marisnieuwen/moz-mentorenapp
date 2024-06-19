import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { CustomButton } from "./StyledComponents";
import axios from "axios";

const BestandUploadModal = ({ open, onClose, onCapture }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to handle the analyze button click
  const handleAnalyze = async () => {
    if (selectedFile) {
      try {
        // Let the user know that the file is being analyzed
        setMessage("Bestand wordt geanalyseerd...");
        setLoading(true);
        console.log("Analysing starting now...");

        // Make a FormData object to send the image to the backend
        const formData = new FormData();
        formData.append("image", selectedFile);

        // Send the image to the backend for analysis
        try {
          const response = await axios.post(
            "https://moz-backend.azurewebsites.net/analyze-image", //change this to your backend URL
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          // Receive the answers from the backend
          const answers = response.data;

          setMessage("Analysegegevens ontvangen");
          setLoading(false);
          console.log("Extracted answers:", answers);

          onCapture(answers);
          onClose(); // Close the modal
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
