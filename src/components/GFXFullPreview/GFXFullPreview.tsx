import React from "react";
import { IGFXFullPreviewProps } from "./interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, IconButton, Slide, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { TransitionProps } from "@material-ui/core/transitions";
import { imageFileTypes, videoFileTypes } from "../../constants/constants";

export const useGFXFullPreviewStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    textAlign: "center",
    backgroundColor: theme.palette.tertiary.main,
    padding: theme.spacing(2),
    borderColor: theme.palette.secondary.dark,
    borderWidth: 2,
    borderBottomStyle: "solid",
  },
  subtext: {
    fontStyle: "italic",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 28,
  },
  titleContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  imageContainer: {
    flex: "1 1 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 1,
    "& > *": {
      height: "100%",
    },
  },
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GFXFullPreview: React.FC<IGFXFullPreviewProps> = ({
  open,
  title,
  subtitle,
  imageUrl,
  onClose,
}) => {
  const classes = useGFXFullPreviewStyles();
  const fileType = imageUrl
    .slice(imageUrl.lastIndexOf(".") + 1, imageUrl.length)
    .toLocaleLowerCase();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <div className={classes.container}>
        <div className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>{title}</Typography>
            {subtitle && (
              <Typography className={classes.subtext}>{subtitle}</Typography>
            )}
          </div>
        </div>
        <div className={classes.imageContainer}>
          {imageFileTypes.includes(fileType) && <img src={imageUrl} />}
          {videoFileTypes.includes(fileType) && (
            <video src={imageUrl} preload="auto" autoPlay={true} loop={true} />
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default GFXFullPreview;
