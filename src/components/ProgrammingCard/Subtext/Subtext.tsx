import { Box, Tooltip, Typography, useTheme } from '@mui/material';
import { useGA4React } from 'ga-4-react';
import React from 'react';

import { ITechnology } from '@constant/technologies';

export interface ISubtextProps {
  technologies: ITechnology[];
}
const Subtext: React.FC<ISubtextProps> = ({ technologies }) => {
  const ga = useGA4React();
  const theme = useTheme();

  const track = (label: string) => {
    if (ga) {
      ga.event('click', label, 'Technology link interest', false);
    }
  };

  return technologies.length > 0 ? (
    <Box
      sx={{
        display: 'flex',
        '& img': {
          height: 20,
          marginLeft: theme.spacing(1),
          filter: 'grayscale(0.5) saturate(1)',
          transition: 'filter 100ms',
          cursor: 'pointer',
          '&:hover': {
            transition: 'filter 100ms',
            filter: 'grayscale(0) saturate(2)',
          },
          '&#mysql_logo': {
            height: 60,
          },
          '&#grpc_logo': {
            filter: 'grayscale(0.5) saturate(3)',
          },
          '&#grpc_logo:hover': {
            filter: 'grayscale(0) saturate(3)',
          },
        },
      }}
    >
      <Typography
        sx={{
          fontStyle: 'italic',
        }}
      >
        {'Technologies Used:'}
      </Typography>
      <Box>
        {technologies.map((technology, index) => {
          return (
            <Tooltip
              title={technology.title}
              key={`technology-${technology.id}-${index}`}
            >
              <a
                rel={'noreferrer'}
                href={technology.link}
                target={'_blank'}
                onClick={() => track(technology.id)}
              >
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/' + technology.filename
                  }
                  alt={technology.title}
                  id={`${technology.title
                    .toLowerCase()
                    .replaceAll(' ', '_')}_logo`}
                />
              </a>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  ) : null;
};

export default Subtext;
