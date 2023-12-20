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
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTemplate } from "../features/quizTemplate";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  // state for form
  const [formData, setFormData] = useState({
    name: "",
    items: 10, // Set a default value
    difficulty: "Easy", // Set a default value
    category: "Any Category", // Set a default value
    quizType: "Any Type", // Set a default value
  });

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    dispatch(
      setTemplate({
        name: formData.name,
        items: formData.items,
        difficulty: formData.difficulty,
        category: formData.category,
        quizType: formData.quizType,
      })
    );

    // Redirect to /quiz after submitting the form
    navigate("/quiz");
  };

  // console.log(values);
  return (
    <>
      {/* home container */}
      <Box
        sx={{
          bgcolor: "primary.light",
          width: "100%",
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
            width: { xs: "90%", sm: "80%", md: "50%" },
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            zIndex: "5",
            overflow: "hidden",
          }}
        >
          <Typography
            fontFamily={"ClashDisplay-Bold"}
            sx={{
              color: "primary.dark",
              // WebkitTextStroke: "2.5px black",
              lineHeight: { xs: "5rem", md: "6rem", lg: "7rem" },
              // fontSize: "8rem",
              fontSize: "clamp(5rem, 10vw, 8rem)",
            }}
          >
            Quiz<span style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}>.io</span>
          </Typography>
          <Typography
            fontFamily={"ClashDisplay-Medium"}
            color={"primary.dark"}
            fontWeight={"500"}
            mb={"1.5rem"}
            sx={{ fontSize: "clamp(.8rem, 2vw, 1.05rem)" }}
          >
            Welcome to Quiz.io, where knowledge meets excitement! Unleash your
            inner quizmaster, test your wits, and discover the joy of learning
            through play.
          </Typography>
          <a href="#quiz-form" style={{ textDecoration: "none" }}>
            <Typography
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
            width={{ xs: "10rem", md: "13rem", lg: "15rem" }}
            position={"absolute"}
            display={{ xs: "none", md: "block" }}
            bottom={{ xs: "-1.5rem", md: "-2rem" }}
            left={{ lg: "5%" }}
          >
            <img
              src={Babae}
              alt="Babae"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            width={{ xs: "6.5rem", md: "7.5rem", lg: "9.5rem" }}
            position={"absolute"}
            display={{ xs: "none", md: "block" }}
            bottom={"-2rem"}
            right={"8%"}
          >
            <img
              src={Lalake}
              alt="Lalake"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            width={{ xs: "6rem", md: "7rem", lg: "9rem" }}
            position={"absolute"}
            top={"5%"}
            left={{ xs: "10%", sm: "15%", md: "18%", lg: "20%" }}
          >
            <img
              src={Twirl}
              alt="twirl"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            width={{ xs: "4rem", md: "5rem", lg: "7rem" }}
            position={"absolute"}
            bottom={{ xs: "10%", sm: "35%", md: "40%" }}
            left={{ xs: "1%", sm: "2%", md: "3%" }}
          >
            <img
              src={Triangle}
              alt="Triangle"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            width={{ xs: "14rem", md: "16rem", lg: "18rem" }}
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
            width={{ xs: "6rem", md: "7rem", lg: "9rem" }}
            position={"absolute"}
            bottom={{ xs: "20%", md: "30%" }}
            right={{ xs: "-2rem", sm: "-3rem", md: "-3rem", lg: "-4rem" }}
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
      <Box overflow={"hidden"}>
        <Box
          id="quiz-form"
          width={{ xs: "90%", md: "80%" }}
          m={"10rem auto"}
          textAlign={"center"}
          position={"relative"}
        >
          <Typography
            fontFamily={"ClashDisplay-Medium"}
            mt={"10rem"}
            sx={{ fontSize: "clamp(1rem, 4vw, 1.5rem)" }}
            fontWeight={"600"}
          >
            Ready, Set, Quiz! Complete the Form to Tailor Your Quiz Experience
            and Begin Your Knowledge Adventure.
          </Typography>

          {/* elements */}
          <Box
            position={"absolute"}
            width={{ xs: "10rem", md: "11rem", lg: "13rem" }}
            zIndex={10}
            top={{ xs: "13%", sm: "13%", md: "12%", lg: "10%" }}
            right={{ xs: "-5rem", lg: "5%" }}
          >
            <img src={Twirl} alt="" style={{ width: "100%", height: "100%" }} />
          </Box>

          <Box
            position={"absolute"}
            width={{ xs: "5rem", md: "6rem", lg: "8rem" }}
            zIndex={10}
            top={{ xs: "95%", sm: "95%", md: "94%", lg: "92%" }}
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
              padding: {
                xs: "3rem 1rem 3rem 1rem",
                sm: "3rem 2rem 3rem 2rem",
                lg: "3rem 6rem 5rem 6rem",
              },
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
              sx={{
                color: "blue.main",
                WebkitTextStroke: { xs: "1px black", md: '"2px black"' },
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
              }}
            >
              Quiz Form
            </Typography>
            <Box component={"form"} width={"100%"} mt={"3rem"}>
              <Grid
                container
                width={"100%"}
                rowSpacing={5}
                columnSpacing={{ xs: 0, md: 5 }}
              >
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
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
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
                    sx={{
                      border: "3px solid",
                      borderColor: "primary.dark",
                      borderRadius: "6px",
                      boxShadow: " 4px 4px 0px 0px #000",
                      width: "100%",
                    }}
                    value={formData.items}
                    onChange={(e) => {
                      setFormData({ ...formData, items: e.target.value });
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
                    value={formData.difficulty}
                    onChange={(e) => {
                      setFormData({ ...formData, difficulty: e.target.value });
                    }}
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
                    value={formData.category}
                    onChange={(e) => {
                      setFormData({ ...formData, category: e.target.value });
                    }}
                    sx={{
                      border: "3px solid",
                      borderColor: "primary.dark",
                      borderRadius: "6px",
                      boxShadow: " 4px 4px 0px 0px #000",
                      width: "100%",
                    }}
                  >
                    <MenuItem value={"Any Category"}>Any Category</MenuItem>
                    <MenuItem value={"Medium"}>Music</MenuItem>
                    <MenuItem value={"Hard"}>Arts</MenuItem>
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
                    value={formData.quizType}
                    onChange={(e) => {
                      setFormData({ ...formData, quizType: e.target.value });
                    }}
                    sx={{
                      border: "3px solid",
                      borderColor: "primary.dark",
                      borderRadius: "6px",
                      boxShadow: " 4px 4px 0px 0px #000",
                      width: "100%",
                    }}
                  >
                    <MenuItem value={"Any Type"}>Any Type</MenuItem>
                    <MenuItem value={"Medium"}>True or False</MenuItem>
                    <MenuItem value={"Hard"}>Multiple Choice</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12} sm={12} lg={6} textAlign={"right"}>
                  <Button
                    sx={{
                      fontFamily: "ClashDisplay-Bold",
                      textTransform: "capitalize",
                      fontSize: "1.2rem",
                      ...redButtonStyles,
                      marginTop: { xs: "1rem", md: "4rem" },
                      width: { xs: "100%", md: "fit-content" },
                    }}
                    onClick={() => {
                      setFormData({
                        name: "",
                        numberOfItems: 10,
                        difficulty: "Easy",
                        category: "Any Category",
                        quizType: "Any Type",
                      });
                    }}
                  >
                    Clear Form
                  </Button>
                </Grid>

                <Grid item xs={12} sm={12} lg={6} textAlign={"left"}>
                  <Button
                    onClick={() => {
                      handleFormSubmit();
                    }}
                    sx={{
                      fontFamily: "ClashDisplay-Bold",
                      textTransform: "capitalize",
                      fontSize: "1.2rem",
                      ...yellowButtonStyles,
                      marginTop: { xs: ".5rem", md: "4rem" },
                      width: { xs: "100%", md: "fit-content" },
                    }}
                  >
                    Submit Form
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
