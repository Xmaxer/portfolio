import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useGA4React } from 'ga-4-react';
import React, { useContext } from 'react';

import { AwsConfig } from '@src/initAws';

import { ParallaxContext } from '@context/ParallaxContext';

export interface IHeaderProps {}

function normalize(a: number, min: number, max: number) {
  if (a >= max) {
    return 1;
  } else if (a <= min) {
    return 0;
  } else {
    return (a - min) / (max - min);
  }
}

const Introduction: React.FC<IHeaderProps> = () => {
  const ga = useGA4React();
  const { position } = useContext(ParallaxContext);
  const theme = useTheme();

  const track = (label: string) => {
    if (ga) {
      ga.event('click', label, 'Personal info interest', false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: theme.spacing(4),
          opacity: () => {
            const multiplier = normalize(position, 0, 200);
            return 1 - multiplier;
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '3px solid ' + theme.palette.primary.light,
            overflow: 'hidden',
            width: () => {
              const multiplier = normalize(position, 0, 200);
              return 200 - 200 * multiplier;
            },
            height: () => {
              const multiplier = normalize(position, 0, 200);
              return 200 - 200 * multiplier;
            },
          }}
        >
          <img
            alt={'profile'}
            style={{
              transform: 'rotate(-90deg)',
              width: 'auto',
              height: '100%',
            }}
            src={
              AwsConfig.THUMBNAIL_BASE_URL +
              'profile/profile_1_thumbnail_400px.jpg'
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: theme.spacing(4),
          position: 'sticky',
          top: 59,
          marginTop: theme.spacing(4),
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme.palette.secondary.dark,
          zIndex: 100,
          [theme.breakpoints.down('sm')]: {
            marginTop: 0,
          },
        }}
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
            [theme.breakpoints.down('md')]: {
              fontSize: 36,
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: 24,
            },
            fontSize: 64,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {'Kevin Jakubauskas'}
        </Typography>
      </Box>
      <Box
        sx={{
          marginBottom: theme.spacing(4),
        }}
      >
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: () => {
              const multiplier = normalize(position, 0, 200);
              return 24 - 24 * multiplier;
            },
            opacity: () => {
              const multiplier = normalize(position, 0, 200);
              return 1 - multiplier;
            },
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.light,
            }}
          >
            {'A constantly evolving full stack developer & 3D designer.'}
          </Typography>
          <br />
          <Typography
            sx={{
              color: theme.palette.tertiary.main,
            }}
          >
            {'First class BSc in Software Development.'}
          </Typography>

          <br />
          <Typography
            sx={{
              color: theme.palette.primary.light,
            }}
          >
            {'Full time Software Engineer.'}
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          top: 60 + 96 - 1,
          [theme.breakpoints.down('md')]: {
            top: 60 + 54 - 1,
          },
          [theme.breakpoints.down('sm')]: {
            top: 60 + 36 - 2,
          },
          position: 'sticky',
          backgroundColor: theme.palette.secondary.dark,
          borderWidth: 2,
          borderColor: theme.palette.primary.light,
          borderBottomStyle: 'solid',
          zIndex: 100,
        }}
      >
        <IconButton
          sx={{
            color: 'white',
            '& .MuiSvgIcon-root': {
              fontSize: 40,
              textShadow:
                '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
            },
          }}
          href={'https://www.linkedin.com/in/kevin-jakubauskas/'}
          target={'_blank'}
          onClick={() => track('Personal Github')}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          sx={{
            color: 'white',
            '& .MuiSvgIcon-root': {
              fontSize: 40,
              textShadow:
                '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
            },
          }}
          href={'https://github.com/Xmaxer?tab=repositories'}
          target={'_blank'}
          onClick={() => track('Personal Linkedin')}
        >
          <GitHub />
        </IconButton>
        <IconButton
          sx={{
            color: 'white',
            '& .MuiSvgIcon-root': {
              fontSize: 40,
              textShadow:
                '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
            },
          }}
          href={'mailto:contactkevinjakubauskas@gmail.com'}
          target={'_blank'}
          onClick={() => track('Personal Email')}
        >
          <Email />
        </IconButton>
      </Box>
    </>
  );
};

export default Introduction;
