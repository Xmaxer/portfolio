import { ITabContextState } from '@providers/contexts/tab/context.js';

export const TAB_CONTEXT_SET_SELECTED_TAB_ACTION =
  'TAB_CONTEXT_SET_SELECTED_TAB_ACTION';

export interface ISetAuthenticatedUserAction {
  type: typeof TAB_CONTEXT_SET_SELECTED_TAB_ACTION;
  selectedTab: number;
}

export type ITabContextActions = ISetAuthenticatedUserAction;

export function tabContextReducer(
  state: ITabContextState,
  action: ITabContextActions,
): ITabContextState {
  switch (action.type) {
    case TAB_CONTEXT_SET_SELECTED_TAB_ACTION:
      return { ...state, selectedTab: action.selectedTab };
    default:
      return state;
  }
}
