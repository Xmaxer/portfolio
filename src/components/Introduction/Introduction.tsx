import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useGA4React } from 'ga-4-react';
import React from 'react';
import { FaGithub, FaLinkedin, FiMail } from 'react-icons/all.js';

import { AwsConfig } from '@src/initAws.js';

export interface IHeaderProps {}

const Introduction: React.FC<IHeaderProps> = () => {
  const ga = useGA4React();
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
            width: '200px',
            height: '200px',
          }}
        >
          <img
            alt={'profile'}
            style={{
              width: 'auto',
              height: '100%',
              transform: 'scale(2) translate(-15px, 15px)',
            }}
            src={
              AwsConfig.THUMBNAIL_BASE_URL +
              'profile/profile_2_thumbnail_600px.jpg'
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
        <Box
          sx={{
            textAlign: 'center',
            '& > *': {
              marginTop: theme.spacing(4),
              fontSize: 24,
              fontWeight: 'bold',
              width: '100%',
            },
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.light,
            }}
            component={'span'}
          >
            {'A constantly evolving full stack developer & 3D designer.'}
          </Typography>
          <br />
          <Typography
            sx={{
              color: theme.palette.tertiary.main,
            }}
            component={'span'}
          >
            {'First class BSc in Software Development.'}
          </Typography>

          <br />
          <Typography
            sx={{
              color: theme.palette.primary.light,
            }}
            component={'span'}
          >
            {'Full time Software Engineer.'}
          </Typography>
        </Box>
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
          <FaLinkedin />
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
          <FaGithub />
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
          href={'mailto:contact@kevinjakubauskas.com'}
          target={'_blank'}
          onClick={() => track('Personal Email')}
        >
          <FiMail />
        </IconButton>
      </Box>
    </>
  );
};

export default Introduction;
