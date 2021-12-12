import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { IpApiActions, IpTrackerPageActions } from 'src/app/ip-tracker/actions';
import { IpFakeRepo } from '../repo/ip-fake.repo';
import { IpImplRepo } from '../repo/ip-impl.repo';
import { IpRepo } from '../repo/ip.repo';

@Injectable({ providedIn: 'root' })
export class IpEffects {
  search$ = createEffect(() =>
    this._actions$.pipe(
      ofType(IpTrackerPageActions.searchIp),
      switchMap(({ query }) =>
        this._ipRepo.search(query).pipe(
          map((ip) => IpApiActions.searchIpSuccess({ ip })),
          catchError((error) => of(IpApiActions.searchIpFailure({ error })))
        )
      )
    )
  );

  loadIp$ = createEffect(() =>
    this._actions$.pipe(
      ofType(IpTrackerPageActions.enter),
      switchMap(() =>
        this._ipRepo.search('').pipe(
          map((ip) => IpApiActions.searchIpSuccess({ ip })),
          catchError((error) =>
            of(IpApiActions.searchIpFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    // @Inject(IpFakeRepo)
    @Inject(IpImplRepo)
    private readonly _ipRepo: IpRepo
  ) {}
}
