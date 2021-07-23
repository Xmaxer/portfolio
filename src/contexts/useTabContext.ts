import {DEFAULT_TAB_CONTEXT_VALUE, ITabContext} from "./TabContext";
import {useState} from "react";

function useTabContext(): ITabContext {
  const [selected, setSelected] = useState(DEFAULT_TAB_CONTEXT_VALUE.selected);
  return { selected, setSelected };
}

export default useTabContext;
