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

const QuizBoxBool = ({
  question,
  incorrect_answers,
  correct_answer,
  index,
}) => {
  const [choiceList, setChoiceList] = useState([]);
  const firstMount = useRef(true);
  const choices = ["True", "False"];

  const [isClicked, setIsClicked] = useState("");

  const handleIsClicked = (answer) => {
    setIsClicked(answer);
  };

  return (
    <Box
      width={"80%"}
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
            >{`a.) ${choices[0]}`}</Typography>
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
                  ? redButtonStylesActive
                  : redButtonStyles),
                padding: ".6rem",
                borderRadius: "10px",
              }}
            >{`b.) ${choices[1]}`}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default QuizBoxBool;
