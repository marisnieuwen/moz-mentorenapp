import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TopCard from "../components/TopCard";
import MenteeCard from "../components/MenteeCard";
import GoalsCard from "../components/GoalsCard";
import WeekCard from "../components/WeekCard"; // Updated to ThisWeekCard
import PhaseCard from "../components/PhaseCard";

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
  flexGrow: 1, //
  flexWrap: "wrap",
});
const RowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "1.25rem", // 20px
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const TopContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
});

const Home = () => {
  const mentee = {
    name: "Aria",
    age: "9 jaar",
    school: "OBS Blijvliet",
    group: "6",
  };

  const goals = ["Taal", "Lezen", "Schoolprestaties"];

  const taskTitles = ["Voorbereiding", "Tussentijdse Evaluatie", "Uploaden"];

  const tasks = [
    "Een goede voorbereiding is het halve werk. Gebruik de toolkit voor inspiratie als je vastloopt of nieuwe ideeën nodig hebt voor de volgende bijeenkomst.",
    "Vul deze samen met je mentee tijdens de bijeenkomst in. Reflecteer en bespreek hoe het MoZ-programma voor jullie samen verloopt.",
    "Maak foto's van de bladzijdes en upload deze in de app.",
  ];

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
          <TopCard
            text={
              <Typography variant="body5">
                Jullie zitten nu in{" "}
                <Typography component="span" fontWeight="bold" variant="body5">
                  week 10
                </Typography>
                , geweldig werk!
              </Typography>
            }
            showTooltip={false}
          />
        </TopContainer>
        <RowContainer>
          <MenteeCard mentee={mentee} />
          <GoalsCard goals={goals} />
          <WeekCard
            title="Deze Week"
            description="Deze week staat in het teken van het verder werken aan de doelen van je mentee. Bereid je goed voor op de volgende bijeenkomst, bied gerichte ondersteuning en blijf gemotiveerd."
            taskTitles={taskTitles}
            tasks={tasks}
          />
          <PhaseCard
            title="Intensieve Begeleidingsfase"
            description="Focus op het uitvoeren van het Plan van Aanpak en de gestelde doelen. Bied ondersteuning en reflecteer regelmatig op de doelen."
          />
        </RowContainer>
      </Box>
    </ContentContainer>
  );
};

export default Home;
