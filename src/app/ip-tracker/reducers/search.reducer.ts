import { createReducer, on } from '@ngrx/store';
import { IpApiActions, IpTrackerPageActions } from 'src/app/ip-tracker/actions';

export const searchFeatureKey = 'search';

export interface State {
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  loading: false,
  error: '',
  query: '',
};

export const reducer = createReducer(
  initialState,
  on(IpTrackerPageActions.enter, (state) => ({ ...state, loading: true })),
  on(IpTrackerPageActions.searchIp, (state, { query }) => ({
    ...state,
    loading: true,
    error: '',
    query,
  })),
  on(IpApiActions.searchIpSuccess, (state, { ip }) => ({
    query: state.query,
    loading: false,
    error: '',
  })),
  on(IpApiActions.searchIpFailure, (state, { error }) => ({
    loading: false,
    query: state.query,
    error,
  }))
);

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
