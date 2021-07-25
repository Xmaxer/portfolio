import React from "react";
import { IGFXCardProps } from "./interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { AwsConfig } from "../../initAws";
import GFXFullPreview from "../GFXFullPreview/GFXFullPreview";
import { imageFileTypes, videoFileTypes } from "../../constants/constants";
import { useGA4React } from "ga-4-react";

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
  const ga = useGA4React();

  const track = (label: string) => {
    if (ga) {
      ga.event("click", label, "Open full size image", false);
    }
  };

  const onClick = (
    url: string,
    title: string,
    number: number,
    subtitle?: string
  ) => {
    const matches = new RegExp(/(.*)_thumbnail.*(\..*)/, "g").exec(url);
    if (matches && matches.length === 3) {
      track(title + "_" + number);
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
        {props.images.map((img, index) => {
          const fileType = img
            .slice(img.lastIndexOf(".") + 1, img.length)
            .toLocaleLowerCase();
          if (imageFileTypes.includes(fileType)) {
            return (
              <div className={classes.imageContainer} key={img + index}>
                <img
                  className={classes.image}
                  src={AwsConfig.THUMBNAIL_BASE_URL + img}
                  onClick={() =>
                    onClick(img, props.name, index, props.description)
                  }
                />
              </div>
            );
          } else if (videoFileTypes.includes(fileType)) {
            return (
              <div>
                <div className={classes.imageContainer} key={img + index}>
                  <video
                    src={AwsConfig.THUMBNAIL_BASE_URL + img}
                    preload="auto"
                    autoPlay={true}
                    loop={true}
                    className={classes.image}
                    onClick={() =>
                      onClick(img, props.name, index, props.description)
                    }
                  />
                </div>
              </div>
            );
          } else return null;
        })}
      </div>
      <GFXFullPreview {...open} onClose={onCloseCallback} />
    </>
  );
};

export default GFXCard;
