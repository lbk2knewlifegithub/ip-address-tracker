import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CircleLoadingSmallModule } from '../shared/loading/circle-loading-small/circle-loading-small.module';
import {
  FooterComponent,
  HeaderComponent,
  IpOrDomainFormComponent
} from './components';
import { AppComponent } from './containers';

const COMPONENTS = [HeaderComponent, IpOrDomainFormComponent, FooterComponent];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CircleLoadingSmallModule,
  ],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
