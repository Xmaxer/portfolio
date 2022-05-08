import { Box, useTheme } from '@mui/material';
import { useGA4React } from 'ga-4-react';
import React from 'react';

import GFXFullPreview from '../GFXFullPreview/GFXFullPreview';

import { AwsConfig } from '@src/initAws';

import { IProjectType } from '@constant/3DProjects';
import { imageFileTypes, videoFileTypes } from '@constant/constants';

export interface IGFXCardProps extends IProjectType {}

interface IOpenState {
  open: boolean;
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const GFXCard: React.FC<IGFXCardProps> = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState<IOpenState>({
    open: false,
    imageUrl: '',
    title: '',
  });
  const ga = useGA4React();

  const track = (label: string) => {
    if (ga) {
      ga.event('click', label, 'Open full size image', false);
    }
  };

  const onClick = (
    url: string,
    title: string,
    number: number,
    subtitle?: string,
  ) => {
    const matches = new RegExp(/(.*)_thumbnail.*(\..*)/, 'g').exec(url);
    if (matches && matches.length === 3) {
      track(title + '_' + number);
      setOpen({
        open: true,
        title: title,
        subtitle: subtitle,
        imageUrl: AwsConfig.FULL_SIZE_BASE_URL + matches[1] + matches[2],
      });
    }
  };

  const onCloseCallback = () => {
    setOpen({
      ...open,
      open: false,
    });
  };

  return (
    <>
      <Box
        sx={{
          minHeight: 260,
          width: '100%',
          backgroundColor: theme.palette.secondary.light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
          '& > *': {
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(2),
          },
          '& > *:first-child': {
            marginLeft: 0,
          },
        }}
      >
        {props.images.map((img, index) => {
          const fileType = img
            .slice(img.lastIndexOf('.') + 1, img.length)
            .toLocaleLowerCase();
          if (imageFileTypes.includes(fileType)) {
            return (
              <Box
                sx={{
                  height: 200,
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '2px solid ' + theme.palette.primary.main,
                  overflow: 'hidden',
                  backgroundColor: theme.palette.primary.light,
                  transition: 'width 0.2s, height 0.2s, border 0.2s',
                  '&:hover': {
                    height: 210,
                    width: 210,
                    cursor: 'pointer',
                    border: '2px solid ' + theme.palette.tertiary.main,
                  },
                }}
                key={img + index}
              >
                <img
                  style={{
                    width: 'auto',
                    height: '100%',
                  }}
                  src={AwsConfig.THUMBNAIL_BASE_URL + img}
                  onClick={() =>
                    onClick(img, props.name, index, props.description)
                  }
                />
              </Box>
            );
          } else if (videoFileTypes.includes(fileType)) {
            return (
              <Box>
                <Box
                  sx={{
                    height: 200,
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '2px solid ' + theme.palette.primary.main,
                    overflow: 'hidden',
                    backgroundColor: theme.palette.primary.light,
                    transition: 'width 0.2s, height 0.2s, border 0.2s',
                    '&:hover': {
                      height: 210,
                      width: 210,
                      cursor: 'pointer',
                      border: '2px solid ' + theme.palette.tertiary.main,
                    },
                  }}
                  key={img + index}
                >
                  <video
                    src={AwsConfig.THUMBNAIL_BASE_URL + img}
                    preload="auto"
                    autoPlay={true}
                    loop={true}
                    style={{
                      width: 'auto',
                      height: '100%',
                    }}
                    onClick={() =>
                      onClick(img, props.name, index, props.description)
                    }
                  />
                </Box>
              </Box>
            );
          } else return null;
        })}
      </Box>
      <GFXFullPreview {...open} onClose={onCloseCallback} />
    </>
  );
};

export default GFXCard;
