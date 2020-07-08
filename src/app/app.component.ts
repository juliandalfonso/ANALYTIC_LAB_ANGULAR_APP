import { Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //title = 'dashboardAnalytic';

  mapa: Mapboxgl.Map;

  ngOnInit() {

    Mapboxgl.accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.50, 40], // Ubicación inicial del mapa @4.7109886,-74.072092,11z [longitud,latitud]
      zoom: 11 // starting zoom
    });
  }

}
