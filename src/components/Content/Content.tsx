import { Box } from '@mui/material';
import { useGA4React } from 'ga-4-react';
import React, { RefObject, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import About from '@component/About/About';
import GFXProjects from '@component/GFXProjects/GFXProjects';
import ProgrammingProjects from '@component/ProgrammingProjects/ProgrammingProjects';
import TabContent from '@component/TabContent/TabContent';

export interface IContentProps {}

const Content: React.FC<IContentProps> = ({}) => {
  const location = useLocation();
  const ga = useGA4React();
  const rootRef: RefObject<HTMLDivElement> | null = useRef(null);

  const track = useCallback(
    (label: string) => {
      if (ga) {
        ga.event('click', label, 'Navigation', false);
      }
    },
    [ga],
  );

  useEffect(() => {
    if (rootRef && rootRef.current) {
      const position = rootRef.current.offsetTop / 3;
      const home = document.getElementById('home');
      track(location.hash);
      let documentTitle;
      switch (location.hash.replace('#', '')) {
        case 'programming':
          documentTitle = "Kevin's Programming Projects";
          break;
        case 'gfx':
          documentTitle = "Kevin's 3D Projects";
          break;
        case 'about':
          documentTitle = "Kevin's Experience";
          break;
        default:
      }

      if (documentTitle) {
        document.title = documentTitle;
      }

      if (home) {
        home.scrollTo({ top: position, behavior: 'smooth' });
      }
    }
  }, [location.hash, track]);

  return (
    <Box
      sx={{
        marginTop: 'calc(100vh - (50vh + 60px + 136px + 20px) + 32px)',
      }}
      ref={rootRef}
    >
      <TabContent value={0}>
        <About />
      </TabContent>
      <TabContent value={1}>
        <ProgrammingProjects />
      </TabContent>
      <TabContent value={2}>
        <GFXProjects />
      </TabContent>
    </Box>
  );
};

export default Content;
