import React from "react";
import { IAboutCardProps } from "./interfaces";
import { makeStyles } from "@material-ui/core/styles";

export const useAboutCardStyles = makeStyles((theme) => ({}));

const AboutCard: React.FC<IAboutCardProps> = ({}) => {
  const classes = useAboutCardStyles();
  return <div></div>;
};

export default AboutCard;
