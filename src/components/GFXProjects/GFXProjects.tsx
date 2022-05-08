import { Box, Typography, useTheme } from '@mui/material';
import React, { memo } from 'react';

import ContentCard from '../ContentCard/ContentCard';
import GFXCard from '../GFXCard/GFXCard';
import GFXTitle from '../GFXTitle/GFXTitle';

import { PROJECTS_3D } from '@constant/3DProjects';

export interface IGFXProjectsProps {}

const GFXProjects: React.FC<IGFXProjectsProps> = ({}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        '& > *': {
          marginTop: theme.spacing(4),
        },
        '& > *:first-child': {
          marginTop: 0,
        },
      }}
      id={'gfx'}
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.primary.light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: theme.spacing(2),
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
          }}
        >
          {'Click any image to view it in full size!'}
        </Typography>
        <Typography
          sx={{
            fontStyle: 'italic',
          }}
        >
          {
            'Note: Opening images in full size may often download between 5MB-12MB'
          }
        </Typography>
      </Box>
      {PROJECTS_3D.map((card, index) => {
        return (
          <ContentCard
            key={`card-${index}`}
            title={<GFXTitle title={card.name} subtitle={card.description} />}
            content={<GFXCard {...card} />}
          />
        );
      })}
    </Box>
  );
};

export default memo(GFXProjects);
