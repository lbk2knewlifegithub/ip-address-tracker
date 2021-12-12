import { Coordinate } from './coordinate.model';

export interface Ip {
  v4: string;
  location: string;
  timezone: string;
  isp: string;
  coordinate: Coordinate;
}
