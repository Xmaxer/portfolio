import { Box, useTheme } from '@mui/material';
import React from 'react';

import ContentCard from '@component/ContentCard/ContentCard';
import ProgrammingCard from '@component/ProgrammingCard/ProgrammingCard';
import Subtext from '@component/ProgrammingCard/Subtext/Subtext';

import { PROGRAMMING_PROJECTS } from '@constant/ProgrammingProjects';

export interface IProgrammingProjectsProps {}

const ProgrammingProjects: React.FC<IProgrammingProjectsProps> = ({}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        '& > *': {
          marginTop: theme.spacing(4),
        },
        '& > *:first-of-type': {
          marginTop: 0,
        },
      }}
      id={'programming'}
    >
      {PROGRAMMING_PROJECTS.map((card, index) => {
        return (
          <ContentCard
            key={`card-${index}`}
            content={card.content}
            title={
              <ProgrammingCard
                title={card.title}
                wip={card.wip}
                projectLinks={card.projectLinks}
              />
            }
            subtext={<Subtext technologies={card.technologies} />}
          />
        );
      })}
    </Box>
  );
};

export default ProgrammingProjects;
