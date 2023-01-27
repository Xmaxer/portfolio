import { TabContext } from '@providers/contexts/tab/context.js';
import { useContext } from 'react';

const useTabContext = () => {
  const tabContext = useContext(TabContext);

  if (!tabContext) {
    throw new Error('Cannot use tab context outside of tab context provider');
  }

  return tabContext;
};

export default useTabContext;
