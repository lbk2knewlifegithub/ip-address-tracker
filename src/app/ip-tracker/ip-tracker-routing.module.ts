import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpTrackerPageComponent } from './containers';

const routes: Routes = [{ path: '', component: IpTrackerPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpTrackerRoutingModule {}
