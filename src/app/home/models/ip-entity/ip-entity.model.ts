import { As } from './as.model';
import { LocationIpEntity } from './location.model';

export interface IpEntity {
  ip: string;
  location: LocationIpEntity;
  domains: string[];
  as: As;
  isp: string;
}
