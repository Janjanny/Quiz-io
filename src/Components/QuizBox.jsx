import { Box, Typography, Grid, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  yellowButtonStyles,
  yellowButtonStylesActive,
  redButtonStyles,
  redButtonStylesActive,
  greenButtonStyles,
  greenButtonStylesActive,
  blueButtonStyles,
  blueButtonStylesActive,
} from "../utils/styles";

const QuizBox = ({ question, incorrect_answers, correct_answer, index }) => {
  const [choiceList, setChoiceList] = useState([]);
  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      const choices = Array.isArray(incorrect_answers)
        ? [...incorrect_answers, correct_answer]
        : [incorrect_answers, correct_answer];

      // Fisher-Yates shuffle algorithm to randomize the order
      for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
      }

      setChoiceList(choices);
    }
  }, []);

  const [isClicked, setIsClicked] = useState("");

  const handleIsClicked = (answer) => {
    setIsClicked(answer);
  };

  return (
    <Box
      width={{ xs: "100%", sm: "90%", md: "80%" }}
      marginInline={"auto"}
      sx={{
        backgroundColor: "primary.main",
        padding: { xs: "2rem 1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        border: "4px solid",
        borderColor: "primary.dark",
        borderRadius: "16px",
        boxShadow: " 5px 12px 0px 0px #090909",
      }}
    >
      {/* question */}
      <Typography
        fontFamily={"ClashDisplay-Medium"}
        fontWeight={"600"}
        sx={{ fontSize: "clamp(.9rem, 4vw, 1.1rem)" }}
        dangerouslySetInnerHTML={{ __html: `${index}.) ${question}` }}
      />

      {/* grid choices */}
      <Box width={"100%"} ml={{ xs: "0", md: "1rem" }}>
        <Grid
          container
          width={"100%"}
          rowSpacing={3}
          mt={".5rem"}
          columnSpacing={{ xs: 0, md: 10 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              onClick={() => {
                handleIsClicked("a");
              }}
              sx={{
                cursor: "pointer",
                color: "primary.dark",
                width: "100%",
                margin: "0 auto",
                fontFamily: "ClashDisplay-Medium",
                textTransform: "capitalize",
                textAlign: "left",
                ...(isClicked === "a"
                  ? blueButtonStylesActive
                  : blueButtonStyles),
                padding: ".6rem",
                borderRadius: "10px",
              }}
              dangerouslySetInnerHTML={{ __html: `a.) ${choiceList[0]}` }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              onClick={() => {
                handleIsClicked("b");
              }}
              sx={{
                cursor: "pointer",
                color: "primary.dark",
                width: "100%",
                margin: "0 auto",
                fontFamily: "ClashDisplay-Medium",
                textTransform: "capitalize",
                textAlign: "left",
                ...(isClicked === "b"
                  ? yellowButtonStylesActive
                  : yellowButtonStyles),
                padding: ".6rem",
                borderRadius: "10px",
              }}
              dangerouslySetInnerHTML={{ __html: `b.) ${choiceList[1]}` }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              onClick={() => {
                handleIsClicked("c");
              }}
              sx={{
                cursor: "pointer",
                color: "primary.dark",
                width: "100%",
                margin: "0 auto",
                fontFamily: "ClashDisplay-Medium",
                textTransform: "capitalize",
                textAlign: "left",
                ...(isClicked === "c"
                  ? redButtonStylesActive
                  : redButtonStyles),
                padding: ".6rem",
                borderRadius: "10px",
              }}
              dangerouslySetInnerHTML={{ __html: `c.) ${choiceList[2]}` }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              onClick={() => {
                handleIsClicked("d");
              }}
              sx={{
                cursor: "pointer",
                color: "primary.dark",
                width: "100%",
                margin: "0 auto",
                fontFamily: "ClashDisplay-Medium",
                textTransform: "capitalize",
                textAlign: "left",
                ...(isClicked === "d"
                  ? greenButtonStylesActive
                  : greenButtonStyles),
                padding: ".6rem",
                borderRadius: "10px",
              }}
              dangerouslySetInnerHTML={{ __html: `d.) ${choiceList[3]}` }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default QuizBox;
