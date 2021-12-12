import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import * as L from 'leaflet';
import { Coordinate } from '../models/coordinate.model';

@Component({
  selector: 'lbk-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="relative z-0" id="map"></div> `,
  styles: [
    `
      #map {
        height: 100vh;
      }
    `,
  ],
})
export class MapComponent implements OnInit {
  _coordinate!: Coordinate;
  @Input() set coordinate(coordinate: Coordinate) {
    this._coordinate = coordinate;
    if (this.map) {
      this.flyTo(coordinate);
    }
  }

  get coordinate(): Coordinate {
    return this._coordinate;
  }

  map!: L.Map;

  private flyTo(coordinate: Coordinate) {
    this.map.flyTo(coordinate, 13);
    this.mark(coordinate);
  }

  private _initMap(): void {
    const { lat, lng } = this.coordinate;
    // this._initIcon();
    this.map = L.map('map', {
      center: [lat, lng],
      zoom: 3,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  mark({ lat, lng }: Coordinate) {
    L.marker([lat, lng]).addTo(this.map);
  }

  private _initIcon() {
    const iconUrl = 'assets/images/icon-location.svg';
    const iconDefault = L.icon({
      iconUrl,
      iconSize: [46, 56],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;
  }

  ngOnInit(): void {
    this._initIcon();
    this._initMap();
    this.flyTo(this.coordinate);
  }
}
