import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { IpEntityMapper } from '../mapper/ip-entity.mapper';
import { Ip } from '../models/ip.model';
import { IpService } from '../services/ip.service';
import { IpRepo } from './ip.repo';

@Injectable({ providedIn: 'root' })
export class IpImplRepo implements IpRepo {
  constructor(
    private readonly _mapper: IpEntityMapper,
    private readonly _service: IpService
  ) {}

  search(query: string): Observable<Ip> {
    return this._service.search(query).pipe(
      switchMap((ipEntity) => of(this._mapper.mapToDomain(ipEntity))),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): Observable<Ip> {
    return throwError(() => "Your ip or domain provided not exist.");
  }
}
