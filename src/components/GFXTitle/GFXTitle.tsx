import React from "react";
import {IGFXTitleProps} from "./interfaces";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

export const useGFXTitleStyles = makeStyles(() => ({
  title: {
    textTransform: "uppercase",
    fontSize: 28,
  },
  subtitle: {
    fontStyle: "italic",
  },
}));

const GFXTitle: React.FC<IGFXTitleProps> = ({ title, subtitle }) => {
  const classes = useGFXTitleStyles();

  return (
    <div>
      <Typography className={classes.title}>{title}</Typography>
      {subtitle && (
        <Typography className={classes.subtitle}>{subtitle}</Typography>
      )}
    </div>
  );
};

export default GFXTitle;
