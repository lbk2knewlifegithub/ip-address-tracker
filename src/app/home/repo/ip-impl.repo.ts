import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IpEntityMapper } from '../mapper/ip-entity.mapper';
import { IpFilterDto } from '../models/ip-filter.dto';
import { Ip } from '../models/ip.model';
import { IpService } from '../services/ip.service';
import { IpRepo } from './ip.repo';

@Injectable({ providedIn: 'root' })
export class IpImplRepo implements IpRepo {
  constructor(
    private readonly _mapper: IpEntityMapper,
    private readonly _service: IpService
  ) {}

  searchByIpAddress(ipAddress: string): Observable<Ip | null> {
    throw new Error('Method not implemented.');
  }
  searchByIpDomain(domain: string): Observable<Ip | null> {
    throw new Error('Method not implemented.');
  }

  search(filter: IpFilterDto): Observable<Ip | null> {
    // return this._service.search(filter).pipe(
    //   switchMap((ipEntity) => of(this._mapper.mapToDomain(ipEntity))),
    //   catchError(IpImplRepo._handleError)
    // );
    return of(null);
  }

  private static _handleError(error: HttpErrorResponse) {
    return of(null);
  }
}
