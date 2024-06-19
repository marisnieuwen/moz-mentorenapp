import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { GoalsCardContainer } from "./StyledComponents";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

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
  padding: "0rem 0.313rem 0rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.3125rem",
  alignSelf: "stretch",
});

const GoalFrame = styled(Box)(({ special }) => ({
  display: "flex",
  padding: "0.1875rem 0.625rem",
  alignItems: "center",
  gap: "0.625rem",
  alignSelf: "stretch",
  borderRadius: "5px",
  border: "0.5px solid rgba(2, 2, 2, 0.16)",
  background: special ? "#D8FFDE" : "rgba(243, 225, 255, 0.76)",
}));

const SpecialGoalFrame = styled(Box)({
  display: "flex",
  padding: "0.1875rem 0.625rem",
  alignItems: "center",
  gap: "0.625rem",
  alignSelf: "stretch",
  marginLeft: "1.5rem",
  borderRadius: "0.125rem",
  border: "0.5px solid rgba(2, 2, 2, 0.16)",
  background: "rgba(243, 225, 255, 0.76)",
});

const GoalItem = ({ text, icon, special }) => (
  <GoalFrame special={special}>
    {icon && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: special ? "#92C294" : "#AF96E1",
        }}
      >
        {icon}
      </Box>
    )}
    <Typography variant="body2">{text}</Typography>
  </GoalFrame>
);

const SpecialGoalItem = ({ text }) => (
  <SpecialGoalFrame>
    <Typography variant="body2">{text}</Typography>
  </SpecialGoalFrame>
);

const GoalsCard = ({ goals }) => {
  return (
    <GoalsCardContainer>
      <SubFrame1>
        <ImageFrame>
          <TrackChangesIcon sx={{ width: 24, height: 24, color: "#AF96E1" }} />
        </ImageFrame>
        <TextFrame1>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Doelen
          </Typography>
        </TextFrame1>
      </SubFrame1>
      <SubFrame2>
        <GoalItem
          text="Taal"
          icon={<AutoStoriesOutlinedIcon sx={{ width: 16, height: 16 }} />}
        />
        <SpecialGoalItem text="Lezen" />
        <GoalItem
          text="Schoolprestaties"
          icon={<SchoolOutlinedIcon sx={{ width: 16, height: 16 }} />}
          special
        />
      </SubFrame2>
    </GoalsCardContainer>
  );
};

export default GoalsCard;
