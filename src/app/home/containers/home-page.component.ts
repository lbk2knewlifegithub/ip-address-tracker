import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MapComponent } from '../components';

@Component({
  selector: 'lbk-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <!--  ip-card-->
      <lbk-ip-card></lbk-ip-card>
      <!--  end ip-card-->

      <!-- map -->
      <lbk-map #map></lbk-map>
      <!-- end map -->
    </main>
  `,
})
export class HomePageComponent {
  @ViewChild('map', { read: MapComponent }) mapComponent!: MapComponent;
}
