import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IpEntity } from '../models/ip-entity/ip-entity.model';

@Injectable({ providedIn: 'root' })
export class IpService {
  constructor(private readonly _http: HttpClient) {}

  searchByIpAddress(ipAddress: string): Observable<IpEntity> {
    const params = new HttpParams({ fromObject: { ipAddress } });
    return this._http.get<IpEntity>(environment.api, { params: params });
  }

  searchByIpDomain(domain: string): Observable<IpEntity> {
    const params = new HttpParams({ fromObject: { domain } });
    return this._http.get<IpEntity>(environment.api, { params: params });
  }
}
