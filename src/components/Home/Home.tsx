import { Box, useTheme } from '@mui/material';
import React, { RefObject, useCallback, useContext, useRef } from 'react';

import Content from '@component/Content/Content';
import Header from '@component/Header/Header';
import Introduction from '@component/Introduction/Introduction';

import useTabContext from '@hook/useTabContext';

import { ParallaxContext } from '@context/ParallaxContext';
import { TabContext } from '@context/TabContext';

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const { setPosition } = useContext(ParallaxContext);
  const rootRef: RefObject<HTMLDivElement> | null = useRef(null);
  const tabContext = useTabContext();
  const theme = useTheme();

  const trackScrollPosition = useCallback(
    (position: number) => {
      console.log(position);
      setPosition(position);
    },
    [setPosition],
  );

  return (
    <TabContext.Provider value={tabContext}>
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
    </TabContext.Provider>
  );
};

export default Home;
