import { Observable } from 'rxjs';
import { IpFilterDto } from '../models/ip-filter.dto';
import { Ip } from '../models/ip.model';

export interface IpRepo {
  /**
   * - Query is ip address v4 or domain
   * @param filter
   */
  search(filter: IpFilterDto): Observable<Ip | null>;

  searchByIpAddress(ipAddress: string): Observable<Ip | null>;
  searchByIpDomain(domain: string): Observable<Ip | null>;
}
