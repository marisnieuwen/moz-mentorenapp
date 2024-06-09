import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import TopCard from "../components/TopCard";
import EvaluationCard from "../components/EvaluationCard";
import { useNavigate } from "react-router-dom";

const ContentContainer = styled(Box)({
  width: "100%",
  maxWidth: "75rem", // 900px
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  justifyContent: "center",
  padding: "0rem 0rem 0.5rem", // Add padding to avoid content being hidden behind the bottom nav
  flexGrow: 1,
});

const RowContainer = styled(Box)({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "1.25rem",
  flexWrap: "wrap",
  marginTop: "1.25rem", // 20px
  justifyContent: "center",
});

const TopContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
});

const Evaluations = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/evaluaties/tussentijdse");
  };
  return (
    <ContentContainer>
      <Box
        mt={3.5}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TopContainer>
          <TopCard text="Evaluaties" showTooltip={true} />
        </TopContainer>
        <RowContainer>
          <EvaluationCard
            title="Tussentijdse Evaluatie"
            description="Halverwege het programma vul je samen met je mentee de tussentijdse evaluatie in."
            notes="Per thema maak je een scan van de papieren evaluatie. Deze scans worden omgezet in data die je kunt controleren voordat je deze verstuurd."
            buttonText="Upload de Tussentijdse Evaluatie"
            disabled={false} // Button is enabled
            buttonAction={handleNavigate}
          />
          <EvaluationCard
            title="Eind Evaluatie"
            description="Aan het einde van het programma vul je samen met je mentee de eind evaluatie in."
            notes="Per thema maak je een scan van de papieren evaluatie. Deze scans worden omgezet in data die je kunt controleren voordat je deze verstuurd."
            buttonText="Upload de Eind Evaluatie"
            disabled={true} // Button is disabled
          />
        </RowContainer>
      </Box>
    </ContentContainer>
  );
};

export default Evaluations;
