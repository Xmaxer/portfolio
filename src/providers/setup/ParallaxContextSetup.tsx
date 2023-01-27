import { IWrapperProps } from '@providers/combineWrappers.js';
import { ParallaxContextProvider } from '@providers/contexts/parallax/context.js';
import React from 'react';

export interface IParallaxContextSetupProps extends IWrapperProps {}

const ParallaxContextSetup: React.FC<IParallaxContextSetupProps> = (props) => {
  const { children } = props;
  return (
    <ParallaxContextProvider initialState={{ position: 0 }}>
      {children}
    </ParallaxContextProvider>
  );
};

export default ParallaxContextSetup;
