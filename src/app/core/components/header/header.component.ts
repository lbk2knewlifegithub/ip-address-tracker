import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IpTrackerPageActions } from 'src/app/ip-tracker/actions';
import * as fromRoot from 'src/app/reducers';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="relative">
      <div>
        <img
          class="w-full min-h-[350px] object-cover object-center tablet:min-h-[300px]"
          src="/assets/images/pattern-bg.png"
          alt="Pattern"
        />
      </div>

      <nav
        class="container mx-auto text-center absolute top-0 left-1/2 -translate-x-1/2 mt-10 space-y-6 tablet:space-y-10 tablet:mt-16"
      >
        <!--    title-->
        <h1 class="text-inverted text-3xl font-bold desktop:text-4xl">
          IP Address Tracker
        </h1>
        <!--    end title-->

        <!--  ip address or domain form-->
        <lbk-ip-or-domain-form
          [searching]="(loading$ | async)!"
          [query]="(query$ | async)!"
          [error]="(error$ | async)!"
          (search)="onSearch($event)"
          class="block w-full max-w-2xl mx-auto"
        ></lbk-ip-or-domain-form>
        <!-- end ip address or domain form-->
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  query$!: Observable<string>;
  error$!: Observable<string>;
  loading$!: Observable<boolean>;

  constructor(private readonly _store: Store) {
    this.query$ = this._store.select(fromRoot.selectSearchQuery);
    this.loading$ = this._store.select(fromRoot.selectSearchLoading);
    this.error$ = this._store.select(fromRoot.selectSearchError);
  }

  onSearch(query: string) {
    this._store.dispatch(IpTrackerPageActions.searchIp({ query }));
  }
}
