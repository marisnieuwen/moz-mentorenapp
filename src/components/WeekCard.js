import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import ChecklistOutlined from "@mui/icons-material/ChecklistOutlined";
import NoteAltOutlined from "@mui/icons-material/NoteAltOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Card from "./Card";

const CardContainer = styled(Box)({
  display: "flex",
  width: "24.375rem",
  padding: "1rem 0.625rem",
  flexDirection: "column",
  alignItems: "flex-start",
  flexShrink: 0,
  gap: "0.625rem",
  backgroundColor: "#FEFEFE",
  borderRadius: "12px",
  border: "0.5px solid rgba(2, 2, 2, 0.13)",
  boxShadow:
    "-2px 21px 6px 0px rgba(0, 0, 0, 0.00), -1px 14px 5px 0px rgba(0, 0, 0, 0.01), -1px 8px 5px 0px rgba(0, 0, 0, 0.03), 0px 3px 3px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
});

const SubFrame1 = styled(Box)({
  display: "flex",
  padding: "0px 0.625rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.1rem",
  alignSelf: "stretch",
});

const TextFrame = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  alignSelf: "stretch",
});

const SubFrame2 = styled(List)({
  display: "flex",
  padding: "0rem 0.625rem",
  flexDirection: "column",
  alignItems: "flex-start",
  // gap: "0.5rem",
  alignSelf: "stretch",
});

const ListItemContainer = styled(ListItem)({
  display: "flex",
  flexDirection: "row", // Updated to row to place icons next to text
  alignItems: "center",
  alignSelf: "stretch",
  gap: "0.625rem",
  paddingTop: "0rem",
  paddingBottom: "0rem",
});

const WeekCard = ({ title, description, tasks, taskTitles }) => {
  return (
    <CardContainer>
      <SubFrame1>
        <TextFrame>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {title}
          </Typography>
        </TextFrame>
        <TextFrame>
          <Typography variant="body1">{description}</Typography>
        </TextFrame>
      </SubFrame1>
      <SubFrame2>
        {tasks.map((task, index) => (
          <ListItemContainer key={index}>
            <ListItemIcon sx={{ minWidth: "unset", marginRight: "10px" }}>
              {index === 0 ? (
                <ChecklistOutlined sx={{ color: "#AF96E1" }} />
              ) : index === 1 ? (
                <NoteAltOutlined sx={{ color: "#AF96E1" }} />
              ) : (
                <FileUploadOutlinedIcon sx={{ color: "#AF96E1" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={taskTitles[index]} secondary={task} />
          </ListItemContainer>
        ))}
      </SubFrame2>
    </CardContainer>
  );
};

export default WeekCard;
