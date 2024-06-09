import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: "1rem",
  borderRadius: "0.75rem",
  boxShadow: theme.shadows[1],
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid rgba(2, 2, 2, 0.13)",
  maxWidth: "100%",
}));

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
