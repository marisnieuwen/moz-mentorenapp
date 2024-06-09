import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Box)({
  display: "flex",
  width: "11rem",
  maxWidth: "12rem",
  padding: "1rem 0.625rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.4rem",
  flexShrink: 0,
  backgroundColor: "#FEFEFE",
  borderRadius: "12px",
  border: "0.5px solid rgba(2, 2, 2, 0.13)",
  boxShadow:
    "-2px 21px 6px 0px rgba(0, 0, 0, 0.00), -1px 14px 5px 0px rgba(0, 0, 0, 0.01), -1px 8px 5px 0px rgba(0, 0, 0, 0.03), 0px 3px 3px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
});

const SubFrame1 = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  alignSelf: "stretch",
});

const ImageFrame = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TextFrame1 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  flex: "1 0 0",
});

const SubFrame2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
  alignSelf: "stretch",
});

const InnerFrame = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  alignSelf: "stretch",
});

const CustomButton = styled(Button)(({ buttoncolor }) => ({
  backgroundColor: buttoncolor,
  display: "flex",
  padding: "0.8125rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem",
  flex: "1 0 0",
  color: "#FEFEFE",
  textAlign: "center",
  fontFamily: "Montserrat",
  fontSize: "0.625rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "100%",
  letterSpacing: "0.01063rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: buttoncolor,
  },
}));

const EvaluationItemCard = ({
  title,
  description,
  buttonText,
  onClick,
  icon,
  buttonColor,
  disabled,
}) => {
  return (
    <CardContainer>
      <SubFrame1>
        <ImageFrame>
          <img
            src={icon}
            alt={`${title} icon`}
            style={{ width: "32px", height: "32px" }}
          />{" "}
        </ImageFrame>
        <TextFrame1>
          <Typography variant="h5">{title}</Typography>
        </TextFrame1>
      </SubFrame1>
      <SubFrame2>
        <InnerFrame>
          <Typography variant="body2">{description}</Typography>
        </InnerFrame>
        <InnerFrame>
          <CustomButton
            variant="contained"
            buttoncolor={buttonColor}
            onClick={onClick}
            disabled={disabled}
          >
            {buttonText}
          </CustomButton>
        </InnerFrame>
      </SubFrame2>
    </CardContainer>
  );
};

export default EvaluationItemCard;
