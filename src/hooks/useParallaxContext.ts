import { useState } from 'react';

import {
  DEFAULT_PARALLAX_CONTEXT_VALUE,
  IParallaxContext,
} from '@context/ParallaxContext';

const useParallaxContext = (): IParallaxContext => {
  const [position, setPosition] = useState(
    DEFAULT_PARALLAX_CONTEXT_VALUE.position,
  );
  return { position, setPosition };
};

export default useParallaxContext;
