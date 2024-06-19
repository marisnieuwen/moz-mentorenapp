import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { CustomButton } from "./StyledComponents";

import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/evaluaties/tussentijdse");
  };

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
