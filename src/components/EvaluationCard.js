import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Card from "./Card";
import { CustomButton, TextContainer } from "./StyledComponents";

const EvaluationCardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem", // 16px
  gap: "1rem", // 16px
  backgroundColor: "#FEFEFE",
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
