import { IWrapperProps } from '@providers/combineWrappers.js';
import AWS from 'aws-sdk';
import { GA4React } from 'ga-4-react';
import React, { useEffect, useState } from 'react';

import { AwsConfig } from '@src/initAws.js';

import Environment from '@utils/environment.js';

const ga4react = new GA4React(Environment.VITE_GA_MEASUREMENT_ID);

export interface IAnalyticsProviderProps extends IWrapperProps {}

const AnalyticsProvider: React.FC<IAnalyticsProviderProps> = (props) => {
  const { children } = props;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log('Using: ', Environment.VITE_GA_MEASUREMENT_ID);
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

  if (!ready) {
    return null;
  }

  return <>{children}</>;
};

export default AnalyticsProvider;
