import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromIpTracker from 'src/app/ip-tracker/reducers';
import { IpCardComponent, MapComponent } from './components';
import { IpTrackerPageComponent } from './containers';
import { IpTrackerRoutingModule } from './ip-tracker-routing.module';

const COMPONENTS = [IpCardComponent, MapComponent];
const CONTAINERS = [IpTrackerPageComponent];

@NgModule({
  imports: [
    CommonModule,
    IpTrackerRoutingModule,
    StoreModule.forFeature(
      fromIpTracker.ipTrackerFeatureKey,
      fromIpTracker.reducers
    ),
  ],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class IpTrackerModule {}
