import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Card from "./Card";
import styled from "@emotion/styled";
import mascotImage from "../images/MoZ Mascot.png";

const Image = styled("img")(({ theme }) => ({
  width: "4.5rem",
  height: "4.555rem",
  position: "absolute",
  top: "-1.7rem",
  right: "-1.9rem",
  [theme.breakpoints.down("sm")]: {
    width: "4.5rem",
    height: "4.555rem",
    top: "-1.7rem",
    right: "-1.6rem",
  },
}));

const ResponsiveBox = styled(Box)({
  width: "100%",
  minWidth: "22rem",
  maxWidth: "25rem",
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
  flexWrap: "wrap",
  boxSizing: "border-box",
});

const Container = styled(Box)({
  display: "inline-flex",
  alignItems: "flex-start",
  gap: "0.625rem",
  position: "relative",
});

const TopCard = ({ text, showTooltip }) => {
  return (
    <Container>
      <Card>
        <Box sx={{ position: "relative" }}>
          {showTooltip && (
            <Tooltip
              title="Met jullie feedback verbeteren we MoZ!"
              placement="top"
              arrow
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-2.75rem",
                  right: "-7rem",
                  transform: "translateX(-50%)",
                  background: "#FEFEFE",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#020202",
                    fontFamily: "Montserrat, Arial",
                  }}
                >
                  Met jullie feedback verbeteren we MoZ!
                </Typography>
              </Box>
            </Tooltip>
          )}
          <Image src={mascotImage} alt="MoZ Mascot" />
        </Box>
        <ResponsiveBox>
          <Typography variant="h5" sx={{ fontFamily: "Montserrat, Arial" }}>
            {text}
          </Typography>
        </ResponsiveBox>
      </Card>
    </Container>
  );
};

export default TopCard;
