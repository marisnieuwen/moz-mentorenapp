import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import Card from "./Card";

const EvaluationCardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem", // 16px
  gap: "1rem", // 16px
  backgroundColor: "#FEFEFE",
});

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem", // 12px
});

const CustomButton = styled(Button)({
  backgroundColor: "#182C61",
  display: "flex",
  borderRadius: "0.375rem",
  padding: "0.6rem 0.6rem",
  textTransform: "none", // Zorg ervoor dat de tekst niet in hoofdletters staat
  "&:hover": {
    backgroundColor: "#14244D",
  },
});

const EvaluationCard = ({
  title,
  description,
  notes,
  buttonText,
  buttonAction,
  disabled,
}) => {
  return (
    <Card>
      <EvaluationCardContainer>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          {title}
        </Typography>
        <TextContainer>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="body1">{notes}</Typography>
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            Alle evaluaties zijn anoniem; MoZ weet niet wie wat heeft gezegd.
          </Typography>
        </TextContainer>
        <CustomButton
          variant="contained"
          disabled={disabled}
          onClick={buttonAction}
          sx={{ fontSize: "10", fontWeight: "600" }}
        >
          {buttonText}
        </CustomButton>
      </EvaluationCardContainer>
    </Card>
  );
};

export default EvaluationCard;
