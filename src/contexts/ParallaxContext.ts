import { createContext } from 'react';

export interface IParallaxContext {
  setPosition: (position: number) => void;
  position: number;
}

export const DEFAULT_PARALLAX_CONTEXT_VALUE = {
  setPosition: () => {},
  position: 0,
};

export const ParallaxContext = createContext<IParallaxContext>(
  DEFAULT_PARALLAX_CONTEXT_VALUE,
);
