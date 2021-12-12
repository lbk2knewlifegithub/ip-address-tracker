import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromIp from 'src/app/ip-tracker/reducers/ip.reducer';
import * as fromSearch from 'src/app/ip-tracker/reducers/search.reducer';
import { environment } from '../../environments/environment';

const rootKey = 'Root reducers token';

export interface State {
  [fromIp.ipFeatureKey]: fromIp.State;
  [fromSearch.searchFeatureKey]: fromSearch.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>(rootKey, {
  factory: () => ({
    router: fromRouter.routerReducer,
    [fromIp.ipFeatureKey]: fromIp.reducer,
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * Router Selectors
 */
export const { selectRouteData } = fromRouter.getSelectors();

// search state
export const selectSearchState = createFeatureSelector<fromSearch.State>(
  fromSearch.searchFeatureKey
);

export const selectSearchQuery = createSelector(
  selectSearchState,
  fromSearch.getQuery
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  fromSearch.getLoading
);

export const selectSearchError = createSelector(
  selectSearchState,
  fromSearch.getError
);

// ip state
export const selectIpState = createFeatureSelector<fromIp.State>(
  fromIp.ipFeatureKey
);

export const selectIp = createSelector(selectIpState, fromIp.getIp);
