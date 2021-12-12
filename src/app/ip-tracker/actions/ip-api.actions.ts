import { createAction, props } from '@ngrx/store';
import { Ip } from '../models/ip.model';

/**
 * - query is ipv4 or domain
 */
export const searchIpSuccess = createAction(
  '[IP API] Search IP Success',
  props<{ ip: Ip }>()
);

export const searchIpFailure = createAction(
  '[IP API] Search IP Failure',
  props<{ error: string }>()
);
