import { ParallaxContext } from '@providers/contexts/parallax/context.js';
import { useContext } from 'react';

const useParallaxContext = () => {
  const parallaxContext = useContext(ParallaxContext);

  if (!parallaxContext) {
    throw new Error(
      'Cannot use parallax context outside of parallax context provider',
    );
  }

  return parallaxContext;
};

export default useParallaxContext;
