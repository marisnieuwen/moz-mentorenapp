import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import menteeAvatar from "../images/menteeava.png";

function Header() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "102vw",
          height: "85%",
          backgroundColor: "#6951C6",
          borderRadius: "0px 0px 45px 0px",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "100%",
          padding: "3px 20px",
          zIndex: 1,
          width: "100%",
          maxWidth: "450px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.315rem" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              zIndex: "900",
              stroke: "#6951C6",
              strokeWidth: "0.5px",
              backgroundColor: "#182C61",
              fontFamily: "Montserrat, Arial",
              fontWeight: 900,
              fontSize: "0.875rem",
              color: "#FFFFFF",
            }}
          >
            AB
          </Avatar>
          <Avatar
            sx={{ width: 32, height: 32, transform: "translateX(-10px)" }}
            src={menteeAvatar}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#FEFEFE",
              fontFamily: "Baloo 2, Arial",
              fontWeight: 800,
            }}
          >
            Hey mentor!
          </Typography>
          <Typography
            variant="h7"
            sx={{ color: "#FEFEFE", fontFamily: "Baloo 2, Arial" }}
          >
            Naam Mentor & Naam Mentee
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
