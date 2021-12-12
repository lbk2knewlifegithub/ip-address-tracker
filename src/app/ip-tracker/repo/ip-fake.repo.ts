import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Ip } from '../models/ip.model';
import { IpRepo } from './ip.repo';

@Injectable()
export class IpFakeRepo implements IpRepo {
  search(query: string): Observable<Ip> {
    return of({
      v4: '192.212.174.101',
      location: 'Brooklyn, NY 10001',
      timezone: 'UTC-05:00',
      isp: 'SpaceX Starlink',
      coordinate: {
        lat: 51.505,
        lng: -0.09,
      },
    }).pipe(delay(2000));
  }
}
