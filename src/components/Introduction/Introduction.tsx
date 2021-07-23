import React, {useContext} from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {IconButton, Typography} from "@material-ui/core";
import {ParallaxContext} from "../../state/ParallaxContext";
import {Email, GitHub, LinkedIn} from "@material-ui/icons";
import {trackAction} from "../../tracker";
import {AwsConfig} from "../../initAws";

export interface IMakeStylesProps {
  position: number;
}

function normalize(a: number, min: number, max: number) {
  if (a >= max) {
    return 1;
  } else if (a <= min) {
    return 0;
  } else {
    return (a - min) / (max - min);
  }
}

const useStyles = makeStyles<Theme, IMakeStylesProps>((theme) => ({
  root: {
    width: "100%",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.dark,
    height: `calc(100vh - 60px)`,
  },
  top: {
    marginBottom: theme.spacing(4),
    position: "sticky",
    top: 59,
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.dark,
    zIndex: 100,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  bottom: {},
  name: {
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    fontSize: 64,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  bodyText: {
    fontSize: ({ position }) => {
      const multiplier = normalize(position, 0, 200);
      return 24 - 24 * multiplier;
    },
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    opacity: ({ position }) => {
      const multiplier = normalize(position, 0, 200);
      return 1 - multiplier;
    },
  },
  subtext: {
    marginBottom: theme.spacing(4),
  },
  links: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    top: 60 + 96 - 1,
    [theme.breakpoints.down("md")]: {
      top: 60 + 54 - 1,
    },
    [theme.breakpoints.down("sm")]: {
      top: 60 + 36 - 2,
    },
    position: "sticky",
    backgroundColor: theme.palette.secondary.dark,
    borderWidth: 2,
    borderColor: theme.palette.primary.light,
    borderBottomStyle: "solid",
    zIndex: 100,
  },
  link: {
    color: "white",
    "& .MuiSvgIcon-root": {
      fontSize: 40,
      textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
    },
  },
  imageContainer: {
    width: ({ position }) => {
      const multiplier = normalize(position, 0, 200);
      return 200 - 200 * multiplier;
    },
    height: ({ position }) => {
      const multiplier = normalize(position, 0, 200);
      return 200 - 200 * multiplier;
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "3px solid " + theme.palette.primary.light,
    overflow: "hidden",
  },
  image: {
    transform: "rotate(-90deg)",
    width: "auto",
    height: "100%",
  },
  imageBlock: {
    opacity: ({ position }) => {
      const multiplier = normalize(position, 0, 200);
      return 1 - multiplier;
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  bodyText1: {
    color: theme.palette.primary.light,
  },
  bodyText2: {
    color: theme.palette.tertiary.main,
  },
  bodyText3: {
    color: theme.palette.primary.light,
  },
}));

export interface IHeaderProps {}

const Introduction: React.FC<IHeaderProps> = () => {
  const { position } = useContext(ParallaxContext);
  const classes = useStyles({ position });

  const trackClick = (action: string) => {
    trackAction("Personal Links", action);
  };

  return (
    <>
      <div className={classes.imageBlock}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={
              AwsConfig.THUMBNAIL_BASE_URL +
              "profile/profile_1_thumbnail_400px.jpg"
            }
          />
        </div>
      </div>
      <div className={classes.top}>
        <Typography className={classes.name}>Kevin Jakubauskas</Typography>
      </div>
      <div className={classes.subtext}>
        <Typography className={classes.bodyText}>
          <span className={classes.bodyText1}>
            A constantly evolving full stack developer & 3D designer.
          </span>
          <br />
          <span className={classes.bodyText2}>
            First class BSc in Software Development.
          </span>

          <br />
          <span className={classes.bodyText3}>
            Full time Software Engineer.
          </span>
        </Typography>
      </div>
      <div className={classes.links}>
        <IconButton
          className={classes.link}
          href={"https://www.linkedin.com/in/kevin-jakubauskas/"}
          target={"_blank"}
          onClick={() => trackClick("Clicked LinkedIn profile")}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          className={classes.link}
          href={"https://github.com/Xmaxer?tab=repositories"}
          target={"_blank"}
          onClick={() => trackClick("Clicked GitHub repositories")}
        >
          <GitHub />
        </IconButton>
        <IconButton
          className={classes.link}
          href={"mailto:contactkevinjakubauskas@gmail.com"}
          target={"_blank"}
          onClick={() => trackClick("Clicked email link")}
        >
          <Email />
        </IconButton>
      </div>
    </>
  );
};

export default Introduction;
