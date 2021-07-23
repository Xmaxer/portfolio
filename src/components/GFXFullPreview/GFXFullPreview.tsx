import React from "react";
import {IGFXFullPreviewProps} from "./interfaces";
import {makeStyles} from "@material-ui/core/styles";
import {Dialog, IconButton, Slide, Typography,} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {TransitionProps} from "@material-ui/core/transitions";

export const useGFXFullPreviewStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
    alignSelf: "flex-start",
        justifyContent: "flex-start",
    marginBottom: theme.spacing(4),
    textAlign: "center",
    backgroundColor: theme.palette.tertiary.main,
    padding: theme.spacing(2),
    borderColor: theme.palette.secondary.dark,
    borderWidth: 2,
    borderBottomStyle: "solid",
        position: 'sticky',
        top: 0,
  },
  subtext: {
    fontStyle: "italic",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 28,
  },
    titleContainer: {
        marginLeft: theme.spacing(4)
    },
    imageContainer: {
        "& > img": {
            width: '100%'
        }
    },
    container: {
        width: '100%',
        height: '100%'
    }
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children?: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const GFXFullPreview: React.FC<IGFXFullPreviewProps> = ({
  open,
  title,
  subtitle,
    imageUrl,
    onClose
}) => {
  const classes = useGFXFullPreviewStyles();

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
                    {
                        subtitle && <Typography className={classes.subtext}>{subtitle}</Typography>

                    }
                </div>

            </div>
            <div className={classes.imageContainer}>
                <img src={imageUrl}/>
            </div>
        </div>
    </Dialog>
  );
};

export default GFXFullPreview;
