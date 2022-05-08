import React from 'react';

import { headerItems } from '@component/Header/Header';
import HeaderTab from '@component/HeaderButton/HeaderTab';
import HeaderTabs from '@component/HeaderTabs/HeaderTabs';

export interface ITabsProps {
  onChange: (newValue: number) => void;
  selected: number;
}

const Tabs: React.FC<ITabsProps> = ({ onChange, selected }) => {
  const handleChange = (event: React.SyntheticEvent, value: number) => {
    onChange(value);
  };

  return (
    <HeaderTabs onChange={handleChange} value={selected}>
      {headerItems.map((item, index) => {
        return (
          <HeaderTab
            key={`header-tab-${index}`}
            autoCapitalize={'true'}
            label={item.label}
          />
        );
      })}
    </HeaderTabs>
  );
};

export default Tabs;
