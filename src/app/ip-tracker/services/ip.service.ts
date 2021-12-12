import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ipv4Regex, ipv6Regex } from 'src/app/shared/regex';
import { environment } from '../../../environments/environment';
import { IpEntity } from '../models/ip-entity/ip-entity.model';

@Injectable({ providedIn: 'root' })
export class IpService {
  constructor(private readonly _http: HttpClient) {}

  search(query: string): Observable<IpEntity> {
    if (!query) return this._searcyMyIp();

    // search by ip when query is ipv4 or ipv6
    if (ipv4Regex.test(query) || ipv6Regex.test(query)) {
      return this._searchByIpAddress(query);
    }

    return this._searchByIpDomain(query);
  }

  private _searcyMyIp(): Observable<IpEntity> {
    return this._http.get<IpEntity>(environment.api);
  }

  private _searchByIpAddress(ipAddress: string): Observable<IpEntity> {
    const params = new HttpParams({ fromObject: { ipAddress } });
    return this._http.get<IpEntity>(environment.api, { params: params });
  }

  private _searchByIpDomain(domain: string): Observable<IpEntity> {
    const params = new HttpParams({ fromObject: { domain } });
    return this._http.get<IpEntity>(environment.api, { params: params });
  }
}
