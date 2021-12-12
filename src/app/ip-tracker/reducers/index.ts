import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromSearch from 'src/app/ip-tracker/reducers/search.reducer';
// import * as fromBooks from '@example-app/books/reducers/books.reducer';
import * as fromRoot from 'src/app/reducers';

export const ipTrackerFeatureKey = 'ipTracker';

export interface IpTrackerState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export interface State extends fromRoot.State {
  [ipTrackerFeatureKey]: IpTrackerState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: IpTrackerState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
  })(state, action);
}

export const selectIpTrackerState =
  createFeatureSelector<IpTrackerState>(ipTrackerFeatureKey);

/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const selectSearchState = createSelector(
  selectIpTrackerState,
  (state) => state.search
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
