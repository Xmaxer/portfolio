import React, { createContext, useReducer } from 'react';

import { ITabContextActions, tabContextReducer } from './reducer.js';

export interface ITabContextState {
  selectedTab: number;
}

export type TabContextType = [
  state: ITabContextState,
  dispatch: React.Dispatch<ITabContextActions>,
];

export const TabContext = createContext<TabContextType | undefined>(undefined);

export interface ITabContextProviderProps {
  children: React.ReactNode;
  initialState: ITabContextState;
}

export const TabContextProvider: React.FC<ITabContextProviderProps> = ({
  children,
  initialState,
}) => {
  const reducer = useReducer(tabContextReducer, initialState);

  return <TabContext.Provider value={reducer}>{children}</TabContext.Provider>;
};
