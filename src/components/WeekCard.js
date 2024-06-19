import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { WeekCardContainer } from "./StyledComponents";
import { styled } from "@mui/system";
import ChecklistOutlined from "@mui/icons-material/ChecklistOutlined";
import NoteAltOutlined from "@mui/icons-material/NoteAltOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

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
  padding: "0rem 0.255rem",
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
    <WeekCardContainer>
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
            <ListItemIcon
              sx={{
                minWidth: "unset",
                marginRight: "0.3rem",
                width: 32,
                height: 32,
              }}
            >
              {index === 0 ? (
                <ChecklistOutlined
                  sx={{ color: "#AF96E1", width: 24, height: 24 }}
                />
              ) : index === 1 ? (
                <NoteAltOutlined
                  sx={{ color: "#AF96E1", width: 24, height: 24 }}
                />
              ) : (
                <FileUploadOutlinedIcon
                  sx={{ color: "#AF96E1", width: 24, height: 24 }}
                />
              )}
            </ListItemIcon>
            <ListItemText
              primary={taskTitles[index]}
              primaryTypographyProps={{ variant: "h4" }}
              secondary={task}
              secondaryTypographyProps={{ variant: "body5" }}
            />
          </ListItemContainer>
        ))}
      </SubFrame2>
    </WeekCardContainer>
  );
};

export default WeekCard;
