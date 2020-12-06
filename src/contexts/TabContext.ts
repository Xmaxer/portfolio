import { createContext } from "react";

export interface ITabContext {
  selected: number;
  setSelected: (selected: number) => void;
}

export const DEFAULT_TAB_CONTEXT_VALUE = {
  selected: -1,
  setSelected: () => {},
};

export const TabContext = createContext<ITabContext>(DEFAULT_TAB_CONTEXT_VALUE);
