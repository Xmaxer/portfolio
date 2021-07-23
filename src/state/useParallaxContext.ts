import {
  DEFAULT_PARALLAX_CONTEXT_VALUE,
  IParallaxContext,
} from "./ParallaxContext";
import { useState } from "react";

const useParallaxContext = (): IParallaxContext => {
  const [position, setPosition] = useState(
    DEFAULT_PARALLAX_CONTEXT_VALUE.position
  );
  return { position, setPosition };
};

export default useParallaxContext;
