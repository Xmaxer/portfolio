import {
  Box,
  Dialog,
  IconButton,
  Slide,
  Typography,
  useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { VscClose } from 'react-icons/all.js';

import { imageFileTypes, videoFileTypes } from '@constants/constants.js';

export interface IGFXFullPreviewProps {
  open: boolean;
  title: string;
  subtitle?: string;
  imageUrl: string;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Slide direction="up" ref={ref} {...props}>
      {props.children}
    </Slide>
  );
});

const GFXFullPreview: React.FC<IGFXFullPreviewProps> = ({
  open,
  title,
  subtitle,
  imageUrl,
  onClose,
}) => {
  const theme = useTheme();
  const fileType = imageUrl
    .slice(imageUrl.lastIndexOf('.') + 1, imageUrl.length)
    .toLocaleLowerCase();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(1),
            textAlign: 'center',
            backgroundColor: theme.palette.tertiary.main,
            padding: theme.spacing(2),
            borderColor: theme.palette.secondary.dark,
            borderWidth: 2,
            borderBottomStyle: 'solid',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <VscClose />
          </IconButton>
          <Box
            sx={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Typography
              sx={{
                textTransform: 'uppercase',
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
        </Box>
        <Box
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 1,
            '& > *': {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            },
          }}
        >
          {imageFileTypes.includes(fileType) && <img src={imageUrl} />}
          {videoFileTypes.includes(fileType) && (
            <video src={imageUrl} preload="auto" autoPlay={true} loop={true} />
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default GFXFullPreview;
