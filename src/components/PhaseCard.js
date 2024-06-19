import React from "react";
import { Typography } from "@mui/material";
import Timeline from "./Timeline";
import { PhaseCardContainer } from "./StyledComponents";

const PhaseCard = ({ title, description }) => {
  return (
    <PhaseCardContainer>
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Timeline />
    </PhaseCardContainer>
  );
};

export default PhaseCard;
