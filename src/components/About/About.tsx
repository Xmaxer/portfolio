import { Box, Divider, Tooltip, Typography, useTheme } from '@mui/material';
import { useGA4React } from 'ga-4-react';
import React from 'react';

import ContentCard from '@component/ContentCard/ContentCard';

import { ABOUT_INFO } from '@constant/aboutInfo';
import { TECHNOLOGIES } from '@constant/technologies';

export interface IAboutProps {}

const About: React.FC<IAboutProps> = ({}) => {
  const theme = useTheme();

  const ga = useGA4React();

  const track = (label: string) => {
    if (ga) {
      ga.event('click', label, 'Technology link interest', false);
    }
  };

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
      id={'about'}
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.secondary.light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant={'h4'}
          sx={{
            marginTop: 'auto',
            textAlign: 'center',
            backgroundColor: theme.palette.tertiary.main,
            width: '100%',
            padding: theme.spacing(2),
          }}
        >
          {"Technologies I've worked with at one point or another"}
        </Typography>
        <Divider
          sx={{
            width: '100%',
            borderColor: theme.palette.secondary.dark,
            marginBottom: theme.spacing(1),
            borderWidth: 1,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 'auto',
            flexWrap: 'wrap',
            paddingBottom: theme.spacing(4),
            '& img': {
              height: 40,
              marginTop: theme.spacing(3),
              marginLeft: theme.spacing(3),
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
          {TECHNOLOGIES.map((technology, index) => {
            return (
              <Tooltip title={technology.title} key={`technology-${index}`}>
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
      {ABOUT_INFO.map((card, index) => {
        return <ContentCard key={`card-${index}`} {...card} />;
      })}
    </Box>
  );
};

export default About;
