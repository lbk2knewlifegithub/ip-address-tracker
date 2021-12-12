import { createReducer, on } from '@ngrx/store';
import { IpApiActions } from 'src/app/ip-tracker/actions';
import { Ip } from '../models/ip.model';

export const ipFeatureKey = 'ip';

export interface State {
  ip: Ip;
}

const initialState: State = {
  ip: {
    v4: '192.212.174.101',
    location: 'Brooklyn, NY 10001',
    timezone: 'UTC-05:00',
    isp: 'SpaceX Starlink',
    coordinate: {
      lat: 20,
      lng: 30,
    },
  },
};

export const reducer = createReducer(
  initialState,
  on(IpApiActions.searchIpSuccess, (state, { ip }) => ({ ...state, ip })),
  // on(IpApiActions.searchIpFailure, (state, { error }) => ({ ip: undefined }))
);

export const getIp = (state: State) => state?.ip;
