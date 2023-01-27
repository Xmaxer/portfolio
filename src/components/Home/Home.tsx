import { Box, useTheme } from '@mui/material';
import { PARALLAX_CONTEXT_SET_POSITION_ACTION } from '@providers/contexts/parallax/reducer.js';
import React, { RefObject, useCallback, useRef } from 'react';

import Content from '@components/Content/Content.js';
import Header from '@components/Header/Header.js';
import Introduction from '@components/Introduction/Introduction.js';

import useParallaxContext from '@hooks/context/useParallaxContext.js';

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const [, parallaxDispatch] = useParallaxContext();
  const rootRef: RefObject<HTMLDivElement> | null = useRef(null);
  const theme = useTheme();

  const trackScrollPosition = useCallback(
    (position: number) => {
      parallaxDispatch({
        type: PARALLAX_CONTEXT_SET_POSITION_ACTION,
        position,
      });
    },
    [parallaxDispatch],
  );

  return (
    <Box
      sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: '100vh',
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: theme.palette.secondary.dark,
      }}
      onScroll={(e) => trackScrollPosition(e.currentTarget.scrollTop)}
      ref={rootRef}
      id={'home'}
    >
      <Header />
      <Introduction />
      <Content />
    </Box>
  );
};

export default Home;
