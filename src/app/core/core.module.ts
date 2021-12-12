import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IpApiInterceptor } from '../ip-tracker/interceptors';
import { IpEntityMapper } from '../ip-tracker/mapper/ip-entity.mapper';
import { IpFakeRepo } from '../ip-tracker/repo/ip-fake.repo';
import { IpImplRepo } from '../ip-tracker/repo/ip-impl.repo';
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
    RouterModule,
    ReactiveFormsModule,
    CircleLoadingSmallModule,
  ],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
  providers: [
    IpFakeRepo,
    IpImplRepo,
    IpEntityMapper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IpApiInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
