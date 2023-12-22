import { Box, Typography } from "@mui/material";
import Rank from "../Components/Rank";

const Rankings = () => {
  return (
    <Box minHeight={"100vh"} width={"100%"} bgcolor={"primary.light"}>
      {/* container */}
      <Box width={{ xs: "90%", md: "80%" }} marginInline={"auto"}>
        <Box
          width={"100%"}
          p={"2.5rem 0"}
          sx={{
            borderBottom: "3px solid",
            borderBottomColor: "primary.dark",
          }}
        >
          <Typography
            sx={{
              fontFamily: "ClashDisplay-Bold",
              fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
              lineHeight: { xs: "4.5rem", md: "5.5rem" },
              color: "yellow.main",
              WebkitTextStroke: "2px black",
            }}
          >
            Rankings
          </Typography>
          <Typography
            sx={{
              fontFamily: "ClashDisplay-Medium",
              width: { xs: "100%", md: "60%" },
              fontSize: "clamp(.6rem, 4vw, 1rem)",
            }}
          >
            Discover the performance standings of all players, showcasing their
            average scores across various difficulty levels.
          </Typography>
        </Box>

        <Box
          width={"100%"}
          p={"2.5rem 0"}
          gap={"32px"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Rank number={1} name={"Chung myung"} rating={9.8} />
          <Rank number={2} name={"Sung Jinwoo"} rating={8.3} />
        </Box>
      </Box>
    </Box>
  );
};
export default Rankings;
