import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { Coordinate } from '../models/coordinate.model';

@Component({
  selector: 'lbk-map',
  template: ` <div class="h-full z-[0]" id="map"></div> `,
})
export class MapComponent implements AfterViewInit {
  map!: L.Map;
  @Input() set coordinate(coordinate: Coordinate) {
    if (this.map) {
      const marker = L.marker([coordinate.lat, coordinate.lng]);
      marker.addTo(this.map);
    }
  }

  private _initMap(): void {
    this._initIcon();

    this.map = L.map('map', { center: [39.8282, -98.5795], zoom: 10 });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
      }
    );

    tiles.addTo(this.map);
  }

  private _initIcon() {
    const iconUrl = 'assets/images/icon-location.svg';
    const iconDefault = L.icon({
      iconUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;
  }

  ngAfterViewInit(): void {
    this._initMap();
  }
}
