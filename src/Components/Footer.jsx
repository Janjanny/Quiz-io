import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import { navLinks } from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      width={"100%"}
      height={"fit-content"}
      sx={{ padding: "5rem 0 3rem 0", bgcolor: "primary.dark" }}
    >
      <Box width={"80%"} margin={"0 auto"} color={"primary.main"}>
        <Grid container width={"100%"}>
          <Grid item xs={12} md={6}>
            <Box width={"100%"} display={"flex"} flexDirection={"column"}>
              <Typography
                fontFamily={"ClashDisplay-Bold"}
                fontSize={"4.5rem"}
                lineHeight={"4.5rem"}
              >
                Quiz<span style={{ fontSize: "2rem" }}>.io</span>
              </Typography>
              <Typography
                width={"80%"}
                fontFamily={"ClashDisplay-Regular"}
                fontSize={".8rem"}
              >
                Explore endless quizzes at Quiz.io. Customize your journey, dive
                into diverse topics, and enjoy learning with each question!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-end"}
              justifyContent={"space-between"}
            >
              <Box height={"50%"} display={"flex"} alignItems={"flex-end"}>
                <a href="/" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      padding: "5px 22px",
                      color: "primary.main",
                      border: "2px solid",
                      borderRadius: "8px",
                      borderColor: "primary.main",
                      fontFamily: "ClashDisplay-Medium",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      gap: "12px",
                    }}
                  >
                    <GitHubIcon /> Github Repository
                  </Button>
                </a>
              </Box>

              <Stack direction={"row"} alignItems={"center"} gap={"36px"}>
                {navLinks.map((nav, index) => (
                  <Link
                    to={nav.destination}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <Typography
                      fontFamily={"ClashDisplay-Regular"}
                      fontSize={"1rem"}
                      color={"primary.main"}
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
                          bgcolor: "primary.main",
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
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Footer;
