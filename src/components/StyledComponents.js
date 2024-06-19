import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

// General container for cards
export const CardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem 0.625rem",
  backgroundColor: "#FEFEFE",
  borderRadius: "12px",
  border: "0.5px solid rgba(2, 2, 2, 0.13)",
  boxShadow:
    "-2px 21px 6px 0px rgba(0, 0, 0, 0.00), -1px 14px 5px 0px rgba(0, 0, 0, 0.01), -1px 8px 5px 0px rgba(0, 0, 0, 0.03), 0px 3px 3px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
});

// Container for phase card
export const PhaseCardContainer = styled(Box)({
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

// Container for Goal card
export const GoalsCardContainer = styled(Box)({
  display: "flex",
  width: "11.35rem",
  padding: "1.45rem 0.625rem",
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

// Container for Evalution Item card
export const EvaluationItemCardContainer = styled(Box)({
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

// Container for Week card
export const WeekCardContainer = styled(Box)({
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

// Custom button component
export const CustomButton = styled(Button)(({ variant, buttoncolor }) => ({
  backgroundColor:
    variant === "contained" ? buttoncolor || "#182C61" : "transparent",
  color: variant === "contained" ? "#FEFEFE" : "#182C61",
  display: "flex",
  borderRadius: "0.375rem",
  padding: "0.6rem 0.6rem",
  textTransform: "none", // Zorg ervoor dat de tekst niet in hoofdletters staat
  border: variant === "outlined" ? "1px solid #182C61" : "none",
  "&:hover": {
    backgroundColor: variant === "contained" ? "#14244D" : "transparent",
    border: variant === "outlined" ? "1px solid #14244D" : "none",
  },
}));

// Custom button component with custom theme
export const CustomThemeButton = styled(Button)(({ buttoncolor }) => ({
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

export const EvaluationFormButton = styled(Button)(({ variant }) => ({
  display: "flex",
  height: "3.625rem",
  padding: "0.8125rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem",
  flex: "1 0 0",
  borderRadius: "0.375rem",
  textTransform: "none",
  ...(variant === "outlined"
    ? { color: "#182C61", border: "2px solid #182C61" }
    : { background: "#182C61", color: "#fff" }),
}));

// Responsive box component
export const ResponsiveBox = styled(Box)({
  width: "100%",
  minWidth: "22rem",
  maxWidth: "25rem",
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
  flexWrap: "wrap",
  boxSizing: "border-box",
});

// Container for text
export const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem", // 12px
});
