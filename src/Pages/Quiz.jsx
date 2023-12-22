import { Box, Button, Typography } from "@mui/material";
import QuizBox from "../Components/QuizBox";
import { yellowButtonStyles } from "../utils/styles";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchAPI } from "../utils/fetch";
import QuizBoxBool from "../Components/QuizBoxBool";

const Quiz = () => {
  const templateValues = useSelector((state) => state.quizTemplate.value);
  const [quizList, setQuizList] = useState([]);
  const firstMount = useRef(true);

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

  // console.log("redux values: ", templateValues);
  console.log(
    `https://opentdb.com/api.php?amount=${templateValues.items}${
      templateValues.category === "any_category"
        ? ""
        : `&category=${templateValues.category}`
    }&difficulty=${templateValues.difficulty}&type=${templateValues.quizType}`
  );
  console.log(quizList);

  return (
    <>
      {quizList && Object.keys(quizList).length > 0 ? (
        <Box
          minHeight={"100vh"}
          width={"100%"}
          sx={{ backgroundColor: "primary.light" }}
          paddingBottom={"15rem"}
        >
          <Box textAlign={"center"}>
            <strong>Templates</strong>
            <p>{templateValues.name}</p>
            <p>{templateValues.items}</p>
            <p>{templateValues.difficulty}</p>
            <p>{templateValues.category}</p>
            <p>{templateValues.quizType}</p>
          </Box>
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
                      index={index + 1}
                      incorrect_answers={quiz.incorrect_answers}
                      correct_answer={quiz.correct_answer}
                    />
                  ))
                : quizList.map((quiz, index) => (
                    <QuizBoxBool
                      key={index}
                      question={quiz.question}
                      index={index + 1}
                      incorrect_answers={quiz.incorrect_answers}
                      correct_answer={quiz.correct_answer}
                    />
                  ))}

              <Box
                width={"100%"}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
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
