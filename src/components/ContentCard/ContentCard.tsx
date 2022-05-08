import { Box, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';

export interface IContentCardProps {
  context?: string;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  subtext?: string | React.ReactNode;
}

const ContentCard: React.FC<IContentCardProps> = ({
  context,
  title,
  content,
  subtext,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: 320,
        // [theme.breakpoints.down("md")]: {
        //   minHeight: 600,
        // },
        width: '100%',
        backgroundColor: theme.palette.secondary.light,
        display: 'flex',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            boxSizing: 'border-box',
            alignSelf: 'flex-start',
            marginBottom: theme.spacing(4),
            textAlign: 'center',
            width: '100%',
            backgroundColor: theme.palette.tertiary.dark,
            padding: theme.spacing(2),
            borderColor: theme.palette.secondary.dark,
            borderWidth: 2,
            borderBottomStyle: 'solid',
          }}
        >
          {typeof title === 'string' ? (
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontSize: 28,
              }}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: theme.spacing(1),
            boxSizing: 'border-box',
            ...(!context ? { justifyContent: 'center' } : {}),
          }}
        >
          {context && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  textAlign: 'left',
                  width: 400,
                  [theme.breakpoints.down('md')]: {
                    width: 200,
                  },
                  [theme.breakpoints.down('sm')]: {
                    width: 100,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 24,
                    textTransform: 'uppercase',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  {context}
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: theme.palette.secondary.dark,
                  borderWidth: 2,
                  height: 280,
                  [theme.breakpoints.down('md')]: {
                    minHeight: 500,
                  },
                  marginLeft: theme.spacing(4),
                  marginRight: theme.spacing(4),
                }}
                orientation={'vertical'}
              />
            </>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 1000,
              width: '100%',
            }}
          >
            {typeof content === 'string' ? (
              <Typography>{content}</Typography>
            ) : (
              content
            )}
            {subtext && (
              <Box
                sx={{
                  marginTop: theme.spacing(4),
                  alignSelf: 'flex-start',
                }}
              >
                {typeof title === 'string' ? (
                  <Typography
                    sx={{
                      fontStyle: 'italic',
                    }}
                  >
                    {subtext}
                  </Typography>
                ) : (
                  subtext
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentCard;
