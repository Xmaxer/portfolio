import { IParallaxContextState } from '@providers/contexts/parallax/context.js';

export const PARALLAX_CONTEXT_SET_POSITION_ACTION =
  'PARALLAX_CONTEXT_SET_POSITION_ACTION';

export interface ISetAuthenticatedUserAction {
  type: typeof PARALLAX_CONTEXT_SET_POSITION_ACTION;
  position: number;
}

export type IParallaxContextActions = ISetAuthenticatedUserAction;

export function parallaxContextReducer(
  state: IParallaxContextState,
  action: IParallaxContextActions,
): IParallaxContextState {
  switch (action.type) {
    case PARALLAX_CONTEXT_SET_POSITION_ACTION:
      return { ...state, position: action.position };
    default:
      return state;
  }
}
