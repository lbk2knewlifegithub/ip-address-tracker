import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, IpOrDomainFormComponent } from './components';
import { AppComponent } from './containers';

const COMPONENTS = [HeaderComponent, IpOrDomainFormComponent];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
