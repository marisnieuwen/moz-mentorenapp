import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  EvaluationItemCardContainer,
  CustomThemeButton,
} from "./StyledComponents";

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
    <EvaluationItemCardContainer>
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
          <CustomThemeButton
            variant="contained"
            buttoncolor={buttonColor}
            onClick={onClick}
            disabled={disabled}
          >
            {buttonText}
          </CustomThemeButton>
        </InnerFrame>
      </SubFrame2>
    </EvaluationItemCardContainer>
  );
};

export default EvaluationItemCard;
