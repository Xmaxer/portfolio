import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import AppRouter from "./AppRouter";
import { ParallaxContext } from "./state/ParallaxContext";
import useParallaxContext from "./state/useParallaxContext";

function App() {
  const parallaxContext = useParallaxContext();

  return (
    <ThemeProvider theme={theme}>
      <ParallaxContext.Provider value={parallaxContext}>
        <AppRouter />
      </ParallaxContext.Provider>
    </ThemeProvider>
  );
}

export default App;
