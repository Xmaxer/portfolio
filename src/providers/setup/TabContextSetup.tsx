import { IWrapperProps } from '@providers/combineWrappers.js';
import { TabContextProvider } from '@providers/contexts/tab/context.js';
import React from 'react';

export interface ITabContextSetupProps extends IWrapperProps {}

const TabContextSetup: React.FC<ITabContextSetupProps> = (props) => {
  const { children } = props;
  return (
    <TabContextProvider initialState={{ selectedTab: 0 }}>
      {children}
    </TabContextProvider>
  );
};

export default TabContextSetup;
