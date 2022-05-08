import { Box } from '@mui/material';
import React, { useContext } from 'react';

import { TabContext } from '@context/TabContext';

export interface ITabContentProps {
  value: number;
  children: React.ReactNode;
}

const TabContent: React.FC<ITabContentProps> = ({ value, children }) => {
  const { selected } = useContext(TabContext);

  return selected === value ? <Box>{children}</Box> : null;
};

export default TabContent;
