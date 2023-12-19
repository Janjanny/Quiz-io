import { Box, Typography } from "@mui/material";
import QuizBox from "../Components/QuizBox";

const Quiz = () => {
  return (
    <Box
      minHeight={"100vh"}
      width={"100%"}
      sx={{ backgroundColor: "primary.light" }}
      paddingBottom={"15rem"}
    >
      {/* container */}
      <Box width={{ xs: "90%", md: "80%" }} margin={"0 auto"}>
        <Box
          width={"100%"}
          textAlign={"center"}
          pt={"5rem"}
          pb={"3rem"}
          sx={{ borderBottom: "3px solid", borderBottomColor: "primary.dark" }}
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
            Select the correct answers for each question, and when you're ready,
            hit 'Submit' to lock in your responses. Good luck on your journey of
            knowledge and fun!
          </Typography>
        </Box>

        {/* quiz tests container */}
        <Box mt={"5rem"} width={"100%"}>
          <QuizBox />
        </Box>
      </Box>
    </Box>
  );
};
export default Quiz;
