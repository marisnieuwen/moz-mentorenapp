import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Timeline from "./Timeline";

const CardContainer = styled(Box)({
  display: "flex",
  width: "390px",
  padding: "16px 10px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  flexShrink: 0,
  backgroundColor: "#FEFEFE",
  borderRadius: "12px",
  border: "0.5px solid rgba(2, 2, 2, 0.13)",
  boxShadow:
    "-2px 21px 6px 0px rgba(0, 0, 0, 0.00), -1px 14px 5px 0px rgba(0, 0, 0, 0.01), -1px 8px 5px 0px rgba(0, 0, 0, 0.03), 0px 3px 3px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
});

const PhaseCard = ({ title, description }) => {
  return (
    <CardContainer>
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Timeline />
    </CardContainer>
  );
};

export default PhaseCard;
