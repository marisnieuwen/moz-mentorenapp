import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import menteeAvatar from "../images/menteeava.png";

const CardContainer = styled(Box)({
  display: "flex",
  width: "11.35rem",
  maxWidth: "12rem",
  padding: "1.355rem 0.625rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
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
  gap: "10px",
  flex: "1 0 0",
});

const SubFrame2 = styled(Box)({
  display: "flex",
  padding: "0px 10px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
  alignSelf: "stretch",
});

const InnerFrame = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  alignSelf: "stretch",
});

const InnerTextFrame1 = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
});

const InnerTextFrame2 = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const MenteeCard = ({ mentee }) => {
  return (
    <CardContainer>
      <SubFrame1>
        <ImageFrame>
          <Avatar sx={{ width: 24, height: 24 }} src={menteeAvatar} />
        </ImageFrame>
        <TextFrame1>
          <Typography variant="h5">Jouw Mentee</Typography>
        </TextFrame1>
      </SubFrame1>
      <SubFrame2>
        <InnerFrame>
          <InnerTextFrame1>
            <Typography variant="body2">Naam:</Typography>
          </InnerTextFrame1>
          <InnerTextFrame2>
            <Typography variant="body2">{mentee.name}</Typography>
          </InnerTextFrame2>
        </InnerFrame>
        <InnerFrame>
          <InnerTextFrame1>
            <Typography variant="body2">Leeftijd:</Typography>
          </InnerTextFrame1>
          <InnerTextFrame2>
            <Typography variant="body2">{mentee.age}</Typography>
          </InnerTextFrame2>
        </InnerFrame>
        <InnerFrame>
          <InnerTextFrame1>
            <Typography variant="body2">School:</Typography>
          </InnerTextFrame1>
          <InnerTextFrame2>
            <Typography variant="body2">{mentee.school}</Typography>
          </InnerTextFrame2>
        </InnerFrame>
        <InnerFrame>
          <InnerTextFrame1>
            <Typography variant="body2">Groep:</Typography>
          </InnerTextFrame1>
          <InnerTextFrame2>
            <Typography variant="body2">{mentee.group}</Typography>
          </InnerTextFrame2>
        </InnerFrame>
      </SubFrame2>
    </CardContainer>
  );
};

export default MenteeCard;
