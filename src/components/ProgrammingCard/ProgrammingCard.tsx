import { GitHub } from '@mui/icons-material';
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import { useGA4React } from 'ga-4-react';
import React from 'react';

export interface IProjectLink {
  title: string;
  url: string;
  icon?: React.ElementType;
}

export interface IProgrammingCardProps {
  title: string;
  wip?: boolean;
  projectLinks?: IProjectLink[];
}

const ProgrammingCard: React.FC<IProgrammingCardProps> = ({
  title,
  wip,
  projectLinks,
}) => {
  const ga = useGA4React();
  const theme = useTheme();

  const track = (label: string) => {
    if (ga) {
      ga.event('click', label, 'Programming card project link', false);
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontSize: 28,
        }}
      >
        {title}
      </Typography>
      {wip && (
        <Typography
          sx={{ color: theme.palette.primary.light, fontWeight: 'bold' }}
        >
          {'WIP'}
        </Typography>
      )}
      {projectLinks && projectLinks.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              marginRight: theme.spacing(1),
            }}
          >
            {'Project links:'}
          </Typography>
          <Box>
            {projectLinks.map((projectLink, index) => {
              const CustomIcon = projectLink.icon;
              return (
                <Tooltip
                  title={projectLink.title}
                  key={projectLink.title + index}
                >
                  <IconButton
                    href={projectLink.url}
                    target={'_blank'}
                    onClick={() => track(projectLink.title)}
                  >
                    {CustomIcon ? <CustomIcon /> : <GitHub />}
                  </IconButton>
                </Tooltip>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProgrammingCard;
