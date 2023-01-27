import { CombinedAppWrappers } from '@providers/combineWrappers.js';
import React from 'react';

import './fontFamilies.css';

import AppRouter from '@src/AppRouter.js';

function App() {
  return (
    <CombinedAppWrappers>
      <AppRouter />
    </CombinedAppWrappers>
  );
}

export default App;
