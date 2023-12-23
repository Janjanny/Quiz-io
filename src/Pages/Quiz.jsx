import { Box, Button, Typography, Modal, Stack } from "@mui/material";
import QuizBox from "../Components/QuizBox";
import {
  yellowButtonStyles,
  redButtonStyles,
  greenButtonStyles,
} from "../utils/styles";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchAPI } from "../utils/fetch";
import { useDispatch } from "react-redux";
import QuizBoxBool from "../Components/QuizBoxBool";
import { setTemplate } from "../features/quizTemplate";

const Quiz = () => {
  const templateValues = useSelector((state) => state.quizTemplate.value);
  const [quizList, setQuizList] = useState([]);
  const firstMount = useRef(true);
  const dispatch = useDispatch();

  // templateValues && Object.keys(templateValues).length > 0
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // fetch api
    if (firstMount.current) {
      firstMount.current = false;
      const fetchQuizes = async () => {
        try {
          const quizes = await fetchAPI(
            `https://opentdb.com/api.php?amount=${templateValues.items}${
              templateValues.category === "any_category"
                ? ""
                : `&category=${templateValues.category}`
            }&difficulty=${templateValues.difficulty}&type=${
              templateValues.quizType
            }`
          );
          setQuizList(quizes.results);
        } catch (error) {
          console.log("error while fetching: ", error);
        }
      };
      fetchQuizes();
    }
  }, []);

  // for score modal
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  //handle and track answers

  // state with a length that depends on the no. of items
  const [userAnswers, setUserAnswers] = useState(
    Array(templateValues.items).fill("")
  );
  console.log(userAnswers);

  // handle submitted answers
  const handleAnwserChange = (index, answer) => {
    // update the user's answer when they select an option
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  // checking the answers

  // storage for the correct answers
  const correctAnswers = [];
  quizList.map((quiz) => {
    correctAnswers.push(quiz.correct_answer);
  });

  const [score, setScore] = useState(0);
  // function for comparing the userAnswers and the correctAnswers
  const handleSubmitQuiz = () => {
    let score = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === userAnswers[i]) {
        score++;
      }
    }

    setScore(score);
    handleOpen();
    return score;
  };

  // Function to reset quiz state
  const resetQuiz = () => {
    setQuizList([]);
    setUserAnswers(Array(templateValues.items).fill(""));
    setScore(0);
  };

  // Function to handle "Try Again" button click
  const handleTryAgain = () => {
    resetQuiz();
    handleClose(); // Close the modal
    window.scrollTo(0, 0);

    // Fetch new quiz questions
    const fetchQuizes = async () => {
      try {
        const quizes = await fetchAPI(
          `https://opentdb.com/api.php?amount=${templateValues.items}${
            templateValues.category === "any_category"
              ? ""
              : `&category=${templateValues.category}`
          }&difficulty=${templateValues.difficulty}&type=${
            templateValues.quizType
          }`
        );
        setQuizList(quizes.results);
      } catch (error) {
        console.log("error while fetching: ", error);
      }
    };
    fetchQuizes();
  };

  return (
    <>
      {quizList && Object.keys(quizList).length > 0 ? (
        <Box
          minHeight={"100vh"}
          width={"100%"}
          sx={{ backgroundColor: "primary.light" }}
          paddingBottom={"15rem"}
        >
          {/* <Box textAlign={"center"}>
            <strong>Templates</strong>
            <p>{templateValues.name}</p>
            <p>{templateValues.items}</p>
            <p>{templateValues.difficulty}</p>
            <p>{templateValues.category}</p>
            <p>{templateValues.quizType}</p>
          </Box> */}
          {/* container */}
          <Box width={{ xs: "90%", md: "80%" }} margin={"0 auto"}>
            <Box
              width={"100%"}
              textAlign={"center"}
              pt={"5rem"}
              pb={"3rem"}
              sx={{
                borderBottom: "3px solid",
                borderBottomColor: "primary.dark",
              }}
            >
              <Typography
                fontFamily={"ClashDisplay-Bold"}
                sx={{
                  color: "blue.main",
                  WebkitTextStroke: "1px black",
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                }}
              >
                Ready to Quiz? Let's Get Started!
              </Typography>
              <Typography
                fontFamily={"ClashDisplay-Medium"}
                sx={{ fontSize: "clamp(.8rem, 3.5vw, 1.1rem)" }}
                width={"90%"}
                m={"0 auto"}
              >
                Select the correct answers for each question, and when you're
                ready, hit 'Submit' to lock in your responses. Good luck on your
                journey of knowledge and fun!
              </Typography>
            </Box>

            {/* quiz tests container */}
            <Box
              mt={"5rem"}
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              gap={"5rem"}
            >
              {templateValues.quizType == "multiple"
                ? quizList.map((quiz, index) => (
                    <QuizBox
                      key={index}
                      question={quiz.question}
                      quizListIndex={index}
                      incorrect_answers={quiz.incorrect_answers}
                      correct_answer={quiz.correct_answer}
                      onAnswerChange={handleAnwserChange}
                    />
                  ))
                : quizList.map((quiz, index) => (
                    <QuizBoxBool
                      key={index}
                      question={quiz.question}
                      quizListIndex={index}
                      incorrect_answers={quiz.incorrect_answers}
                      correct_answer={quiz.correct_answer}
                      onAnswerChange={handleAnwserChange}
                    />
                  ))}

              <Box
                width={"100%"}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  onClick={handleSubmitQuiz}
                  sx={{
                    cursor: "pointer",
                    color: "primary.dark",
                    margin: "0 auto",
                    ...yellowButtonStyles,
                    fontFamily: "ClashDisplay-Bold",
                    fontSize: "clamp(1.1rem, 4vw, 1.4rem)",
                    width: { xs: "100%", md: "fit-content" },
                  }}
                >
                  Submit Quiz
                </Button>
              </Box>

              {/* score modal */}
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
                    fontSize={"2rem"}
                    color={"green.main"}
                    lineHeight={"2rem"}
                  >
                    Done!
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    color={"primary.dark"}
                    fontFamily={"ClashDisplay-Medium"}
                    fontSize={"1.2rem"}
                    mb={"1.5rem"}
                  >
                    Congratulations <strong>{templateValues.name}</strong>! for
                    completing the quiz. Here are you results.
                  </Typography>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    paddingInline={"12px"}
                  >
                    <Typography
                      fontFamily={"ClashDisplay-Medium"}
                      fontSize={"1.1rem"}
                    >
                      Number of Items:{" "}
                    </Typography>
                    <Typography
                      fontFamily={"ClashDisplay-Bold"}
                      fontSize={"1.1rem"}
                    >
                      {templateValues.items}
                    </Typography>
                  </Stack>

                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    paddingInline={"12px"}
                  >
                    <Typography
                      fontFamily={"ClashDisplay-Medium"}
                      fontSize={"1.1rem"}
                    >
                      Difficulty:{" "}
                    </Typography>
                    <Typography
                      fontFamily={"ClashDisplay-Bold"}
                      fontSize={"1.1rem"}
                    >
                      {templateValues.difficulty}
                    </Typography>
                  </Stack>

                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    paddingInline={"12px"}
                    sx={{
                      paddingBottom: "12px",
                      borderBottom: "3px solid",
                      borderBottomColor: "primary.dark",
                    }}
                  >
                    <Typography
                      fontFamily={"ClashDisplay-Medium"}
                      fontSize={"1.1rem"}
                    >
                      Score:{" "}
                    </Typography>
                    <Typography
                      fontFamily={"ClashDisplay-Bold"}
                      fontSize={"1.1rem"}
                    >
                      {score}
                    </Typography>
                  </Stack>

                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    paddingInline={"12px"}
                    mt={"1rem"}
                  >
                    <Typography
                      fontFamily={"ClashDisplay-Medium"}
                      fontSize={"1.5rem"}
                    >
                      Rating:{" "}
                    </Typography>
                    <Typography
                      fontFamily={"ClashDisplay-Bold"}
                      fontSize={"1.5rem"}
                      color={"green.dark"}
                    >
                      9.9
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} gap={"12px"}>
                    <Button
                      onClick={handleTryAgain}
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
                      Try Again
                    </Button>

                    <Button
                      onClick={handleClose}
                      sx={{
                        cursor: "pointer",
                        color: "primary.dark",
                        width: "fit-content",
                        margin: "0 auto",
                        ...greenButtonStyles,
                        fontFamily: "ClashDisplay-Bold",
                        textTransform: "capitalize",
                        mt: "1.5rem",
                      }}
                    >
                      Confirm
                    </Button>
                  </Stack>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          height={"100vh"}
          width={"100%"}
          display={"grid"}
          sx={{ placeItems: "center" }}
        >
          <div class="loader"></div>
        </Box>
      )}
    </>
  );
};
export default Quiz;
