import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export const navLinks = [
  { navigation: "Home", destination: "/" },
  { navigation: "View Rankings", destination: "/rankings" },
  {
    navigation: "API Documentation",
    destination: "https://opentdb.com/api_config.php",
  },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: ".8rem 0",
        height: "fit-content",
        borderBottom: "6px",
        borderBottomStyle: "solid",
        borderBottomColor: "primary.dark",
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        top: "0",
        bgcolor: "primary.main",
        zIndex: 100,
      }}
    >
      <Stack
        width={"90%"}
        height={"100%"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Link to="/quiz" style={{ textDecoration: "none" }}>
            <Typography
              fontFamily={"ClashDisplay-Bold"}
              color={"primary.dark"}
              fontSize={"2rem"}
            >
              Quiz<span style={{ fontSize: "1.2rem" }}>.io</span>
            </Typography>
          </Link>
        </Box>
        <Stack direction={"row"} alignItems={"center"} gap={"36px"}>
          {navLinks.map((nav, index) => (
            <Link
              to={nav.destination}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <Typography
                fontFamily={"ClashDisplay-Medium"}
                fontSize={"1rem"}
                color={"primary.dark"}
                position={"relative"}
                sx={{
                  display: { xs: "none", md: "block" },
                  "&::before": {
                    content: '" "',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: "0",
                    left: "0",
                    bgcolor: "primary.dark",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                    transformOrigin: "bottom right",
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                }}
              >
                {nav.navigation}
              </Typography>
            </Link>
          ))}
          <Box
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              display: { xs: "grid", md: "none" },
              placeItems: "center",
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "4px",
              boxShadow: " 3px 3px 0px 0px #000",
              "&:active": {
                boxShadow: "1px 1px 0px 0px #000",
                transform: "translate(2px,2px)",
              },
            }}
          >
            <MenuRoundedIcon />
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {navLinks.map((nav, index) => (
              <Link
                to={nav.destination}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    color: "primary.dark",
                    fontFamily: "ClashDisplay-Medium",
                  }}
                >
                  {nav.navigation}
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Navbar;
