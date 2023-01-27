import React from 'react';

import { headerItems } from '@components/Header/Header.js';
import HeaderTab from '@components/HeaderButton/HeaderTab.js';
import HeaderTabs from '@components/HeaderTabs/HeaderTabs.js';

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
