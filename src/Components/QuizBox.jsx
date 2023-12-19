import { Box, Typography, Grid, Button } from "@mui/material";
import { useState } from "react";
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
const QuizBox = () => {
  const [isClicked, setIsClicked] = useState("");

  const handleIsClicked = (answer) => {
    setIsClicked(answer);
  };

  return (
    <Box
      width={"100%"}
      sx={{
        backgroundColor: "primary.main",
        padding: "3rem",
        border: "4px solid",
        borderColor: "primary.dark",
        borderRadius: "16px",
        boxShadow: " 5px 12px 0px 0px #1e1e1e",
      }}
    >
      {/* question */}
      <Typography
        fontFamily={"ClashDisplay-Medium"}
        fontWeight={"600"}
        sx={{ fontSize: "clamp(.9rem, 4vw, 1.1rem)" }}
      >
        {`1.) Which company did Gabe Newell work at before founding Valve
        Corporation?`}
      </Typography>
      {/* grid choices */}
      <Box width={"100%"} ml={"1rem"}>
        <Grid
          container
          width={"100%"}
          rowSpacing={3}
          mt={".5rem"}
          columnSpacing={10}
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
            >{`a.) Microsoft`}</Typography>
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
            >{`b.) Microsoft`}</Typography>
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
            >{`c.) Microsoft`}</Typography>
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
            >{`d.) Microsoft`}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default QuizBox;
