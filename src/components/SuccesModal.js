import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/evaluaties/tussentijdse");
  };

  const CustomButton = styled(Button)({
    backgroundColor: "#182C61",
    display: "flex",
    borderRadius: "0.375rem",
    padding: "0.6rem 0.6rem",
    color: "#fefefe",
    fontSize: "0.75rem",
    textTransform: "none", // Zorg ervoor dat de tekst niet in hoofdletters staat
    "&:hover": {
      backgroundColor: "#14244D",
    },
  });

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Gelukt!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          De evaluatiegegevens van "Wij Samen" zijn verzonden. Heel erg bedankt!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={handleClose} color="primary">
          Terug naar Tussentijdse Evaluatie
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessModal;
