import { useState } from 'react';

import { DEFAULT_TAB_CONTEXT_VALUE, ITabContext } from '@context/TabContext';

function useTabContext(): ITabContext {
  const [selected, setSelected] = useState(DEFAULT_TAB_CONTEXT_VALUE.selected);
  return { selected, setSelected };
}

export default useTabContext;
