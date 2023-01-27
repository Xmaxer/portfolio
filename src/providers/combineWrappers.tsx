import AnalyticsProvider from '@providers/setup/AnalyticsProvider.js';
import MuiThemeProvider from '@providers/setup/MuiThemeProvider.js';
import ParallaxContextSetup from '@providers/setup/ParallaxContextSetup.js';
import TabContextSetup from '@providers/setup/TabContextSetup.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const wrappers = [
  AnalyticsProvider,
  ParallaxContextSetup,
  TabContextSetup,
  MuiThemeProvider,
  BrowserRouter,
];

export interface IWrapperProps {
  children: React.ReactNode;
}

const combineWrappers = (components: Array<React.FC<IWrapperProps>>) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: { children: React.ReactNode }): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: { children: React.ReactNode }) => <>{children}</>,
  );
};

export const CombinedAppWrappers = combineWrappers(wrappers);
