import "./App.css";
import { createTheme, ThemeProvider, Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ClashDisplayRegular from "./fonts/ClashDisplay-Regular.woff2";
import ClashDisplayBold from "./fonts/ClashDisplay-Bold.woff2";
import ClashDisplayMedium from "./fonts/ClashDisplay-Medium.woff2";
import ClashDisplaySemibold from "./fonts/ClashDisplay-Semibold.woff2";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Quiz from "./Pages/Quiz";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily:
        "ClashDisplay-Regular, ClashDisplay-Bold, ClashDisplay-Medium, ClashDisplay-Semibold, Arial",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'ClashDisplay-Regular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('ClashDisplay-Regular'), local('ClashDisplay-Regular'), url(${ClashDisplayRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'ClashDisplay-Bold';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('ClashDisplay-Bold'), local('ClashDisplay-Bold'), url(${ClashDisplayBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'ClashDisplay-Medium';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('ClashDisplay-Medium'), local('ClashDisplay-Medium'), url(${ClashDisplayMedium}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'ClashDisplay-Semibold';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('ClashDisplay-Semibold'), local('ClashDisplay-Semibold'), url(${ClashDisplaySemibold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      },
    },

    palette: {
      primary: {
        main: "#fff",
        light: "#FFF9E4",
        dark: "#090909",
      },
      blue: {
        main: "#46A7FF",
        light: "#7EC2FF",
        dark: "#1C73C1",
      },
      red: {
        main: "#FF3652",
        light: "#FF4C65",
        dark: "#C51F36",
      },
      green: {
        main: "#39CC76",
        light: "#53E38F",
        dark: "#21A256",
      },
      yellow: {
        main: "#FFDB3E",
        dark: "#D9B722",
        light: "#FFE264",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
