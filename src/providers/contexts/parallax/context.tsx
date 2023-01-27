import React, { createContext, useReducer } from 'react';

import { IParallaxContextActions, parallaxContextReducer } from './reducer.js';

export interface IParallaxContextState {
  position: number;
}

export type ParallaxContextType = [
  state: IParallaxContextState,
  dispatch: React.Dispatch<IParallaxContextActions>,
];

export const ParallaxContext = createContext<ParallaxContextType | undefined>(
  undefined,
);

export interface IParallaxContextProviderProps {
  children: React.ReactNode;
  initialState: IParallaxContextState;
}

export const ParallaxContextProvider: React.FC<
  IParallaxContextProviderProps
> = ({ children, initialState }) => {
  const reducer = useReducer(parallaxContextReducer, initialState);

  return (
    <ParallaxContext.Provider value={reducer}>
      {children}
    </ParallaxContext.Provider>
  );
};
