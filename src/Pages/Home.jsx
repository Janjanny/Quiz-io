import {
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import {
  yellowButtonStyles,
  yellowButtonStylesActive,
  redButtonStyles,
  redButtonStylesActive,
  greenButtonStyles,
} from "../utils/styles";
import { useState } from "react";
import Babae from "../assets/babae.svg";
import Lalake from "../assets/lalake.svg";
import Twirl from "../assets/twirl.svg";
import Lapis from "../assets/lapis.svg";
import Rainbow from "../assets/rainbow.svg";
import Triangle from "../assets/triangle.png";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      {/* home container */}
      <Box
        sx={{
          bgcolor: "primary.light",
          height: "75vh",
          borderBottom: "7px solid",
          borderBottomColor: "primary.dark",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* texts */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            zIndex: "5",
          }}
        >
          <Typography
            fontFamily={"ClashDisplay-Bold"}
            fontSize={"8rem"}
            sx={{
              color: "primary.dark",
              // WebkitTextStroke: "2.5px black",
              lineHeight: "7rem",
            }}
          >
            Quiz<span style={{ fontSize: "5rem" }}>.io</span>
          </Typography>
          <Typography
            fontFamily={"ClashDisplay-Medium"}
            fontSize={"1.05rem"}
            color={"primary.dark"}
            fontWeight={"500"}
            mb={"1.5rem"}
          >
            Welcome to Quiz.io, where knowledge meets excitement! Unleash your
            inner quizmaster, test your wits, and discover the joy of learning
            through play.
          </Typography>
          <a href="#quiz-form" style={{ textDecoration: "none" }}>
            <Typography
              onClick={() => {
                handleButtonClick();
              }}
              sx={{
                cursor: "pointer",
                color: "primary.dark",
                width: "fit-content",
                margin: "0 auto",
                ...yellowButtonStyles,
              }}
              fontFamily={"ClashDisplay-Medium"}
            >
              Take a Quiz
            </Typography>
          </a>
        </Box>

        {/* images */}
        <Box position={"relative"} width={"100%"} height={"100%"} zIndex={1}>
          <Box
            width={"15rem"}
            position={"absolute"}
            bottom={"-2rem"}
            left={"8%"}
          >
            <img
              src={Babae}
              alt="Babae"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            width={"9.5rem"}
            position={"absolute"}
            bottom={"-2rem"}
            right={"8%"}
          >
            <img
              src={Lalake}
              alt="Lalake"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box width={"9rem"} position={"absolute"} top={"5%"} left={"20%"}>
            <img
              src={Twirl}
              alt="twirl"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box width={"7rem"} position={"absolute"} bottom={"40%"} left={"5%"}>
            <img
              src={Triangle}
              alt="Triangle"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            width={"18rem"}
            position={"absolute"}
            top={"-2rem"}
            right={"-6rem"}
          >
            <img
              src={Lapis}
              alt="Lapis"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            width={"9rem"}
            position={"absolute"}
            bottom={"20%"}
            right={"-4rem"}
          >
            <img
              src={Rainbow}
              alt="Rainbow"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>

      {/* quiz-form container */}
      <Box
        id="quiz-form"
        width={"80%"}
        m={"10rem auto"}
        textAlign={"center"}
        position={"relative"}
      >
        <Typography
          fontFamily={"ClashDisplay-Medium"}
          mt={"10rem"}
          fontSize={"1.5rem"}
          fontWeight={"600"}
        >
          Ready, Set, Quiz! Complete the Form to Tailor Your Quiz Experience and
          Begin Your Knowledge Adventure.
        </Typography>

        {/* elements */}
        <Box
          position={"absolute"}
          width={"13rem"}
          zIndex={10}
          top={"10%"}
          right={"5%"}
        >
          <img src={Twirl} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>

        <Box
          position={"absolute"}
          width={"8rem"}
          zIndex={10}
          top={"92%"}
          right={"90%"}
        >
          <img
            src={Triangle}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* form */}
        <Box
          sx={{
            margin: "8rem auto",
            padding: "3rem 6rem 5rem 6rem",
            border: "4px solid",
            borderColor: "primary.dark",
            borderRadius: "16px",
            boxShadow: " 5px 12px 0px 0px #1e1e1e",
            position: "relative",
            zIndex: "5",
          }}
        >
          <Typography
            fontFamily={"ClashDisplay-Bold"}
            fontSize={"5rem"}
            sx={{ color: "blue.main", WebkitTextStroke: "2px black" }}
          >
            Quiz Form
          </Typography>
          <Box component={"form"} width={"100%"} mt={"3rem"}>
            <Grid container width={"100%"} rowSpacing={5} columnSpacing={5}>
              <Grid item xs={12} textAlign={"left"}>
                <Typography fontFamily={"ClashDisplay-Medium"} mb={".5rem"}>
                  Enter Your Name:{" "}
                </Typography>
                <TextField
                  id="name"
                  size="small"
                  sx={{
                    border: "3px solid",
                    borderColor: "primary.dark",
                    borderRadius: "6px",
                    boxShadow: " 4px 4px 0px 0px #000",
                    width: "100%",
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6} textAlign={"left"}>
                <Typography fontFamily={"ClashDisplay-Medium"} mb={".5rem"}>
                  Number of Items:
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  value={10}
                  sx={{
                    border: "3px solid",
                    borderColor: "primary.dark",
                    borderRadius: "6px",
                    boxShadow: " 4px 4px 0px 0px #000",
                    width: "100%",
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={6} textAlign={"left"}>
                <Typography fontFamily={"ClashDisplay-Medium"} mb={".5rem"}>
                  Select Difficulty:
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  value={"Easy"}
                  sx={{
                    border: "3px solid",
                    borderColor: "primary.dark",
                    borderRadius: "6px",
                    boxShadow: " 4px 4px 0px 0px #000",
                    width: "100%",
                  }}
                >
                  <MenuItem value={"Easy"}>Easy</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Hard"}>Hard</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={6} textAlign={"left"}>
                <Typography fontFamily={"ClashDisplay-Medium"} mb={".5rem"}>
                  Select Category:
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  value={"Any Category"}
                  sx={{
                    border: "3px solid",
                    borderColor: "primary.dark",
                    borderRadius: "6px",
                    boxShadow: " 4px 4px 0px 0px #000",
                    width: "100%",
                  }}
                >
                  <MenuItem value={"Any Category"}>Any Category</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Hard"}>Hard</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={6} textAlign={"left"}>
                <Typography fontFamily={"ClashDisplay-Medium"} mb={".5rem"}>
                  Select Quiz Type:
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  value={"Any Type"}
                  sx={{
                    border: "3px solid",
                    borderColor: "primary.dark",
                    borderRadius: "6px",
                    boxShadow: " 4px 4px 0px 0px #000",
                    width: "100%",
                  }}
                >
                  <MenuItem value={"Any Type"}>Any Type</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Hard"}>Hard</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={6} textAlign={"right"}>
                <Button
                  sx={{
                    fontFamily: "ClashDisplay-Bold",
                    textTransform: "capitalize",
                    fontSize: "1.2rem",
                    ...redButtonStyles,
                    marginTop: "4rem",
                  }}
                >
                  Clear Form
                </Button>
              </Grid>

              <Grid item xs={12} md={6} textAlign={"left"}>
                <Button
                  sx={{
                    fontFamily: "ClashDisplay-Bold",
                    textTransform: "capitalize",
                    fontSize: "1.2rem",
                    ...yellowButtonStyles,
                    marginTop: "4rem",
                  }}
                >
                  Submit Form
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
