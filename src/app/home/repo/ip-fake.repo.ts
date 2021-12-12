import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IpFilterDto } from '../models/ip-filter.dto';
import { Ip } from '../models/ip.model';
import { IpRepo } from './ip.repo';

@Injectable()
export class IpFakeRepo implements IpRepo {
  search(filter: IpFilterDto): Observable<Ip | null> {
    return of({
      v4: '192.212.174.101',
      location: 'Brooklyn, NY 10001',
      timezone: 'UTC-05:00',
      isp: 'SpaceX Starlink',
      coor: {
        lat: 20,
        lng: 30,
      },
    }).pipe(delay(1000));
  }

  searchByIpAddress(ipAddress: string): Observable<Ip | null> {
    return of({
      v4: '192.212.174.101',
      location: 'Brooklyn, NY 10001',
      timezone: 'UTC-05:00',
      isp: 'SpaceX Starlink',
      coor: {
        lat: 20,
        lng: 30,
      },
    }).pipe(delay(1000));
  }
  searchByIpDomain(domain: string): Observable<Ip | null> {
    return of({
      v4: '192.212.174.101',
      location: 'Brooklyn, NY 10001',
      timezone: 'UTC-05:00',
      isp: 'SpaceX Starlink',
      coor: {
        lat: 20,
        lng: 30,
      },
    }).pipe(delay(1000));
  }
}
