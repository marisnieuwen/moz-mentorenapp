import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const TimelineContainer = styled(Box)({
  width: "100%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "2px",
  display: "inline-flex",
});

const BarContainer = styled(Box)({
  alignSelf: "stretch",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  display: "inline-flex",
});

const GradientBar = styled(Box)({
  flex: "1 1 0",
  height: "12px",
  background: "linear-gradient(90deg, #6951C6 65%, rgba(105, 81, 198, 0) 65%)",
  borderRadius: "5px",
});

const Divider = styled(Box)({
  width: "22px",
  height: "0",
  transform: "rotate(90deg)",
  transformOrigin: "0 0",
  border: "1px rgba(255, 255, 255, 0.50) solid",
});

const LabelsContainer = styled(Box)({
  alignSelf: "stretch",
  paddingLeft: "5px",
  paddingRight: "5px",
  justifyContent: "space-between",
  alignItems: "center",
  display: "inline-flex",
});

const Label = styled(Box)({
  flex: "1 1 0",
  height: "8px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
  display: "flex",
});

const LabelText = styled(Typography)({
  flex: "1 1 0",
  textAlign: "center",
  fontSize: "10px",
  fontFamily: '"Baloo 2", Arial',
  lineHeight: "8px",
  wordWrap: "break-word",
});

const Timeline = () => {
  return (
    <TimelineContainer>
      <BarContainer>
        <GradientBar />
        <Divider
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%)",
          }}
        />
        <Divider />
        <Divider />
      </BarContainer>
      <LabelsContainer>
        <Label>
          <LabelText
            sx={{
              color: "rgba(201.88, 201.88, 201.88, 0.76)",
              fontWeight: 500,
            }}
          >
            Fase 1
          </LabelText>
        </Label>
        <Label>
          <LabelText sx={{ color: "rgba(2, 2, 2, 0.87)", fontWeight: 600 }}>
            Fase 2
          </LabelText>
        </Label>
        <Label>
          <LabelText
            sx={{
              color: "rgba(201.88, 201.88, 201.88, 0.76)",
              fontWeight: 500,
            }}
          >
            Fase 3
          </LabelText>
        </Label>
        <Label>
          <LabelText
            sx={{
              color: "rgba(201.88, 201.88, 201.88, 0.76)",
              fontWeight: 500,
            }}
          >
            Fase 4
          </LabelText>
        </Label>
      </LabelsContainer>
    </TimelineContainer>
  );
};

export default Timeline;
