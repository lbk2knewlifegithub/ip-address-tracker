import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as fromRoot from 'src/app/reducers';
import { Coordinate } from '../models/coordinate.model';
import { IpTrackerPageActions } from 'src/app/ip-tracker/actions';
import { Ip } from '../models/ip.model';

@Component({
  selector: 'lbk-ip-tracker-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="">
      <div class="container relative">
        <!--  ip-card-->
        <lbk-ip-card
        *ngIf="!(error$ | async)"
          class="inline-block w-full z-50 px-[2rem] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          [ip]="(ip$ | async)!"
        ></lbk-ip-card>
        <!--  end ip-card-->
      </div>

      <!-- map -->
      <lbk-map [coordinate]="(coordinate$ | async)!"></lbk-map>
      <!-- end map -->
    </main>
    <!-- [coordinate]="(coordinate$ | async)!" -->
  `,
})
export class IpTrackerPageComponent implements OnInit {
  ip$!: Observable<Ip>;
  coordinate$!: Observable<Coordinate>;
  error$!: Observable<string>;

  constructor(private readonly _store: Store) {
    this.ip$ = this._store.select(fromRoot.selectIp);
    this.coordinate$ = this.ip$.pipe(map((ip) => ip.coordinate));
    this.error$ = this._store.select(fromRoot.selectSearchError);
  }

  ngOnInit(): void {
    this._store.dispatch(IpTrackerPageActions.enter());
  }
}
