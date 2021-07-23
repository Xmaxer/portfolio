import React from "react";
import { IGFXCardProps } from "./interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { AwsConfig } from "../../initAws";
import GFXFullPreview from "../GFXFullPreview/GFXFullPreview";

export const useGraphicsCardStyles = makeStyles((theme) => ({
  root: {
    minHeight: 260,
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    boxSizing: "border-box",
    "& > *": {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    "& > *:first-child": {
      marginLeft: 0,
    },
  },
  imageContainer: {
    height: 200,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "2px solid " + theme.palette.primary.main,
    overflow: "hidden",
    backgroundColor: theme.palette.primary.light,
    transition: "width 0.2s, height 0.2s, border 0.2s",
    "&:hover": {
      height: 210,
      width: 210,
      cursor: "pointer",
      border: "2px solid " + theme.palette.tertiary.main,
    },
  },
  image: {
    width: "auto",
    height: "100%",
  },
}));

interface IOpenState {
  open: boolean;
  imageUrl: string;
  title: string;
  subtitle?: string;
}
const GFXCard: React.FC<IGFXCardProps> = (props) => {
  const classes = useGraphicsCardStyles();
  const [open, setOpen] = React.useState<IOpenState>({
    open: false,
    imageUrl: "",
    title: "",
  });

  const onClick = (url: string, title: string, subtitle?: string) => {
    const matches = new RegExp(/(.*)_thumbnail_.*(\..*)/, "g").exec(url);
    if (matches && matches.length === 3) {
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
      <div className={classes.root}>
        {props.images.map((img, index) => (
          <div className={classes.imageContainer} key={img + index}>
            <img
              className={classes.image}
              src={AwsConfig.THUMBNAIL_BASE_URL + img}
              onClick={() => onClick(img, props.name, props.description)}
            />
          </div>
        ))}
      </div>
      <GFXFullPreview {...open} onClose={onCloseCallback} />
    </>
  );
};

export default GFXCard;
