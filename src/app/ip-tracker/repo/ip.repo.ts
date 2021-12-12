import { Observable } from 'rxjs';
import { Ip } from '../models/ip.model';

export interface IpRepo {
  search(query: string): Observable<Ip>;
}
