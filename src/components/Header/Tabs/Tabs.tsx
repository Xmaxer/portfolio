import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderTabs from "../../HeaderTabs/HeaderTabs";
import HeaderTab from "../../HeaderButton/HeaderTab";
import { headerItems } from "../Header";

const useStyles = makeStyles((theme) => ({}));

export interface ITabsProps {
  onChange: (newValue: number) => void;
  selected: number;
}

const Tabs: React.FC<ITabsProps> = ({ onChange, selected }) => {
  const classes = useStyles();

  return (
    <HeaderTabs onChange={(e, i) => onChange(i)} value={selected}>
      {headerItems.map((item, index) => {
        return (
          <HeaderTab
            key={`header-tab-${index}`}
            autoCapitalize={"true"}
            label={item.label}
          />
        );
      })}
    </HeaderTabs>
  );
};

export default Tabs;
