import React, { useContext, useRef } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ParallaxContext } from "../../state/ParallaxContext";

export interface IMakeStylesProps {
  position: number;
  height: number;
}

const useStyles = makeStyles<Theme, IMakeStylesProps>(() => ({
  container: {
    maxHeight: "100vh",
    maxWidth: "100%",
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    overflow: "hidden",
    transform: ({ position, height }) => {
      let yTransform = 0;
      if (height > 0) {
        yTransform = position / height;
      }
      if (yTransform > 0.5) {
        yTransform = 0.5;
      }
      return `translate(0,-${yTransform * 100}%)`;
    },
  },
}));

export interface IParallaxProps {}

const Parallax: React.FC<IParallaxProps> = ({}) => {
  const { position } = useContext(ParallaxContext);
  const imageRef: React.RefObject<HTMLImageElement> | null | undefined = useRef(
    null
  );
  const height = imageRef && imageRef.current ? imageRef.current.height : 0;
  const classes = useStyles({ position, height });

  return (
    <div className={classes.container}>
      <img
        src={`${process.env.PUBLIC_URL}/images/xmax_logo_2k.png`}
        alt={"logo"}
        className={classes.image}
        ref={imageRef}
      />
    </div>
  );
};

export default Parallax;
