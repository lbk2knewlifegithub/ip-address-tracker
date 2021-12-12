// import {
//   Action,
//   combineReducers,
//   createFeatureSelector,
//   createSelector
// } from '@ngrx/store';
// import * as fromRoot from 'src/app/reducers';

// export const ipTrackerFeatureKey = 'ipTracker';

// export interface IpTrackerState {
//   [fromSearch.searchFeatureKey]: fromSearch.State;
//   [fromIp.ipFeatureKey]: fromIp.State;
// }

// export interface State extends fromRoot.State {
//   [ipTrackerFeatureKey]: IpTrackerState;
// }

// /** Provide reducer in AoT-compilation happy way */
// export function reducers(state: IpTrackerState | undefined, action: Action) {
//   return combineReducers({
//     [fromSearch.searchFeatureKey]: fromSearch.reducer,
//     [fromIp.ipFeatureKey]: fromIp.reducer,
//   })(state, action);
// }

// export const selectIpTrackerState =
//   createFeatureSelector<IpTrackerState>(ipTrackerFeatureKey);

// // search state
// export const selectSearchState = createSelector(
//   selectIpTrackerState,
//   (state) => state.search
// );

// export const selectSearchQuery = createSelector(
//   selectSearchState,
//   fromSearch.getQuery
// );

// export const selectSearchLoading = createSelector(
//   selectSearchState,
//   fromSearch.getLoading
// );

// export const selectSearchError = createSelector(
//   selectSearchState,
//   fromSearch.getError
// );

// // ip state
// export const selectIpState = createSelector(
//   selectIpTrackerState,
//   (state) => state.ip
// );

// export const selectIp = createSelector(selectIpState, fromIp.getIp);
