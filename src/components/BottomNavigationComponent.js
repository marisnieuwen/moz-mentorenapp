import React from "react";
import { BottomNavigation, BottomNavigationAction, Badge } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { Height } from "@mui/icons-material";

const BottomNavigationComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getStyles = (path) => {
    const isActive =
      location.pathname === path || location.pathname.startsWith(`${path}/`);
    return {
      icon: {
        color: isActive ? "#6A52C7" : "#020202",
        opacity: isActive ? 1 : 0.5,
        width: "22px",
        height: "22px",
      },
      label: {
        fontFamily: '"Baloo 2", Arial',
        fontWeight: isActive ? 600 : 400,
        color: isActive ? "#6A52C7" : "#020202",
        opacity: isActive ? 1 : 0.5,
        fontSize: 10,
      },
    };
  };

  return (
    <BottomNavigation
      showLabels
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#FEFEFE",
        boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <BottomNavigationAction
        label={<span style={getStyles("/").label}>Home</span>}
        value="/"
        icon={<HomeOutlinedIcon sx={getStyles("/").icon} />}
      />
      <BottomNavigationAction
        label={<span style={getStyles("/evaluaties").label}>Evaluaties</span>}
        value="/evaluaties"
        icon={
          <Badge badgeContent={1} color="error">
            <NoteAltOutlinedIcon sx={getStyles("/evaluaties").icon} />
          </Badge>
        }
      />
      {/* <BottomNavigationAction
        label={<span style={getStyles("/toolkit").label}>Toolkit</span>}
        value="/toolkit"
        icon={<HomeRepairServiceOutlinedIcon sx={getStyles("/toolkit").icon} />}
      />
      <BottomNavigationAction
        label={<span style={getStyles("/menu").label}>Menu</span>}
        value="/menu"
        icon={<MenuOutlinedIcon sx={getStyles("/menu").icon} />}
      /> */}
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
