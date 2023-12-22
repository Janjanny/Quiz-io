import { Box, Typography } from "@mui/material";

const Rank = ({ number, name, rating }) => {
  return (
    <Box
      padding={"16px 35px"}
      width={"100%"}
      sx={{
        backgroundColor: "primary.main",
        border: "3px solid",
        borderColor: "primary.dark",
        borderRadius: "18px",
        boxShadow: " 4px 4px 0px 0px #000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box display={"flex"} gap={"24px"} alignItems={"center"}>
        <Typography
          fontFamily={"ClashDisplay-Bold"}
          sx={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          {number}
        </Typography>
        <Typography
          fontFamily={"ClashDisplay-Medium"}
          sx={{ fontSize: "clamp(1.1rem, 4vw, 1.3rem)" }}
        >
          {name}
        </Typography>
      </Box>

      <Typography
        fontFamily={"ClashDisplay-Bold"}
        sx={{
          fontSize: "clamp(2rem, 4vw, 2.5rem)",
          color: "primary.dark",
        }}
      >
        {rating}
      </Typography>
    </Box>
  );
};
export default Rank;
