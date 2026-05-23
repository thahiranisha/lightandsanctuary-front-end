import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import * as L from 'leaflet';

@Component({
  selector: 'app-santuary-map',
  templateUrl: './santuary-map.component.html',
  styleUrls: ['./santuary-map.component.scss']
})
export class SantuaryMapComponent implements OnInit{
  private map: any;
  private beaconApiUrl = `${environment.apiBaseUrl}/beacons`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initMap();
    this.loadBeacons();
  }

  private initMap(): void {
    this.map = L.map('map').setView([7.8731, 80.7718], 7); // Sri Lanka center
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private loadBeacons(): void {
    this.http.get<any[]>(this.beaconApiUrl).subscribe(data => {
      data.forEach(beacon => {
        const marker = L.marker([beacon.latitude, beacon.longitude])
          .addTo(this.map)
          .bindPopup(`<b>${beacon.title}</b><br>${beacon.description}`);
      });
    });
  }
}
