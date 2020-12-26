import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import AppRouter from "./AppRouter";
import { ParallaxContext } from "./state/ParallaxContext";
import useParallaxContext from "./state/useParallaxContext";
import ReactGA from "react-ga";
import "./App.css";

function App() {
  const parallaxContext = useParallaxContext();
  ReactGA.initialize("UA-96164665-3");
  return (
    <ThemeProvider theme={theme}>
      <ParallaxContext.Provider value={parallaxContext}>
        <AppRouter />
      </ParallaxContext.Provider>
    </ThemeProvider>
  );
}

export default App;
