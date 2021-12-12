import { createAction, props } from '@ngrx/store';

export const enter = createAction('[IP Tracker Page] Enter');

export const searchIp = createAction(
  '[IP Tracker Page] Search Ip',
  props<{ query: string }>()
);
