import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {TabContext} from "../../contexts/TabContext";

const useStyles = makeStyles((theme) => ({}));

export interface ITabContentProps {
  value: number;
}

const TabContent: React.FC<ITabContentProps> = ({ value, children }) => {
  const classes = useStyles();
  const { selected } = useContext(TabContext);

  return selected === value ? <div>{children}</div> : null;
};

export default TabContent;
