import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@material-ui/core";
import theme from "./theme/theme";
import AppRouter from "./AppRouter";
import {ParallaxContext} from "./state/ParallaxContext";
import useParallaxContext from "./state/useParallaxContext";
import ReactGA from "react-ga";
import "./App.css";
import AWS from "aws-sdk";
import {AwsConfig} from "./initAws";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ReactGA.initialize("UA-96164665-3");
    AWS.config.region = "eu-west-1";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "eu-west-1:8924d468-1518-4a1b-bda0-b4818bf280b6",
    });
    AwsConfig.init();
    setReady(true);
  }, []);

  const parallaxContext = useParallaxContext();

  return ready ? (
    <ThemeProvider theme={theme}>
      <ParallaxContext.Provider value={parallaxContext}>
        <AppRouter />
      </ParallaxContext.Provider>
    </ThemeProvider>
  ) : null;
}

export default App;
