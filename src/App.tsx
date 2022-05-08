import { ThemeProvider } from '@mui/material';
import AWS from 'aws-sdk';
import GA4React from 'ga-4-react';
import React, { useEffect, useState } from 'react';

import './App.css';
import AppRouter from './AppRouter';
import { AwsConfig } from './initAws';

import useParallaxContext from '@hook/useParallaxContext';

import { ParallaxContext } from '@context/ParallaxContext';

import theme from '@util/theme/theme';

const ga4react = new GA4React(process.env.REACT_APP_GA_MEASUREMENT_ID ?? '');

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log('Using: ', process.env.REACT_APP_GA_MEASUREMENT_ID);
    ga4react
      .initialize()
      .catch(() => {
        console.warn('Failed to start tracking. Ad blocker perhaps?');
      })
      .finally(() => {
        AWS.config.region = 'eu-west-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: 'eu-west-1:8924d468-1518-4a1b-bda0-b4818bf280b6',
        });
        AwsConfig.init();
        setReady(true);
      });
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
