import { ThemeProvider } from '@mui/material';
import { IWrapperProps } from '@providers/combineWrappers.js';
import React from 'react';

import theme from '@utils/theme/theme.js';

export interface IMuiThemeProviderProps extends IWrapperProps {}

const MuiThemeProvider: React.FC<IMuiThemeProviderProps> = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
