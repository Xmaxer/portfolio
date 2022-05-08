import { Box, Typography } from '@mui/material';
import React from 'react';

export interface IGFXTitleProps {
  title: string;
  subtitle?: string;
}

const GFXTitle: React.FC<IGFXTitleProps> = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 28,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontStyle: 'italic',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default GFXTitle;
