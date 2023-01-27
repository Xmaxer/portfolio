import { Box } from '@mui/material';
import React from 'react';

import useTabContext from '@hooks/context/useTabContext.js';

export interface ITabContentProps {
  value: number;
  children: React.ReactNode;
}

const TabContent: React.FC<ITabContentProps> = ({ value, children }) => {
  const [{ selectedTab }] = useTabContext();

  return selectedTab === value ? <Box>{children}</Box> : null;
};

export default TabContent;
