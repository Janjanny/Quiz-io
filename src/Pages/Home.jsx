import {
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Modal,
} from "@mui/material";
import {
  yellowButtonStyles,
  yellowButtonStylesActive,
  redButtonStyles,
  redButtonStylesActive,
  greenButtonStyles,
} from "../utils/styles";
import { useRef, useState } from "react";
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
import { fetchAPI } from "../utils/fetch";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const firstMount = useRef(true);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    if (firstMount.current) {
      firstMount.current = false;
      // fetch data
      const fetchCategory = async () => {
        const categoryData = await fetchAPI(
          "https://opentdb.com/api_category.php"
        );
        setCategoryList(categoryData.trivia_categories);
      };

      fetchCategory();
    }
  }, []);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  // state for form
  const [formData, setFormData] = useState({
    name: "",
    items: 10, // Set a default value
    difficulty: "easy", // Set a default value
    category: "any_category", // Set a default value
    quizType: "multiple", // Set a default value
  });

  const navigate = useNavigate();

  const [nameError, setNameError] = useState(false);
  const [itemsError, setItemsError] = useState(false);
  const [errorMesage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // error handlers
    if (!formData.name.trim()) {
      setNameError(true);
      setErrorMessage("Please put a name");
      handleOpen();
      return;
    } else if (formData.items < 1 || formData.items > 50) {
      setItemsError(true);
      setErrorMessage(
        "The number of items must be greater than 1 and less than 50"
      );
      handleOpen();

      return;
    } else {
      // if no errror dispatch the values and send the user to quiz
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
    }
  };

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
              boxShadow: " 5px 12px 0px 0px #090909",
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
            <Box
              component={"form"}
              width={"100%"}
              mt={"3rem"}
              onSubmit={handleFormSubmit}
            >
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
                  <TextField
                    type="number"
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
                  />
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
                    <MenuItem value={"easy"}>Easy</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"hard"}>Hard</MenuItem>
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
                    <MenuItem value={"any_category"}>Any Category</MenuItem>
                    {categoryList?.map((category) => (
                      <MenuItem value={category.id} key={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
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
                    <MenuItem value={"multiple"}>Multiple Choice</MenuItem>
                    <MenuItem value={"boolean"}>True or False</MenuItem>
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
                        difficulty: "easy",
                        category: "any_category",
                        quizType: "multiple",
                      });
                    }}
                  >
                    Clear Form
                  </Button>
                </Grid>

                <Grid item xs={12} sm={12} lg={6} textAlign={"left"}>
                  <Button
                    sx={{
                      fontFamily: "ClashDisplay-Bold",
                      textTransform: "capitalize",
                      fontSize: "1.2rem",
                      ...yellowButtonStyles,
                      marginTop: { xs: ".5rem", md: "4rem" },
                      width: { xs: "100%", md: "fit-content" },
                    }}
                    type="submit"
                  >
                    Submit Form
                  </Button>
                </Grid>
              </Grid>

              {/* modal */}
              <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "primary.main",
                    border: "4px solid",
                    borderColor: "primary.dark",
                    boxShadow: "5px 12px 0px 0px #090909",
                    p: 4,
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    fontFamily={"ClashDisplay-Bold"}
                    fontSize={"1.5rem"}
                    color={"red.main"}
                  >
                    Warning!
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    color={"primary.dark"}
                    fontFamily={"ClashDisplay-Medium"}
                    fontSize={"1rem"}
                  >
                    {errorMesage}
                  </Typography>

                  <Button
                    onClick={handleClose}
                    sx={{
                      cursor: "pointer",
                      color: "primary.dark",
                      width: "fit-content",
                      margin: "0 auto",
                      ...redButtonStyles,
                      fontFamily: "ClashDisplay-Bold",
                      textTransform: "capitalize",
                      mt: "1.5rem",
                    }}
                  >
                    Okay!
                  </Button>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
