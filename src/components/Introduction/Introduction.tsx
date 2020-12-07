import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";
import { ParallaxContext } from "../../state/ParallaxContext";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

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
    marginTop: "calc(50vh - 60px - 136px)",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.dark,
    zIndex: 100,
  },
  bottom: {},
  name: {
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 36,
    },
    fontSize: 64,
    color: "white",
    fontWeight: "bold",
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
}));

export interface IHeaderProps {}

const Introduction: React.FC<IHeaderProps> = () => {
  const { position } = useContext(ParallaxContext);
  const classes = useStyles({ position });
  return (
    <>
      <div className={classes.top}>
        <Typography className={classes.name}>Kevin Jakubauskas</Typography>
      </div>
      <div className={classes.subtext}>
        <Typography className={classes.bodyText}>
          A constantly evolving full stack developer & 3D designer
          <br />
          First class BSc in Software Development.
        </Typography>
      </div>
      <div className={classes.links}>
        <IconButton
          className={classes.link}
          href={"https://www.linkedin.com/in/kevin-jakubauskas/"}
          target={"_blank"}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          className={classes.link}
          href={"https://github.com/Xmaxer?tab=repositories"}
          target={"_blank"}
        >
          <GitHub />
        </IconButton>
        <IconButton
          className={classes.link}
          href={"mailto:contactkevinjakubauskas@gmail.com"}
          target={"_blank"}
        >
          <Email />
        </IconButton>
      </div>
    </>
  );
};

export default Introduction;
