import React, { Component } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from "esri/layers/VectorTileLayer";
import Header from './shared/Header';

export default class HelloWorld extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
      var map = new Map();

      var view = new MapView({
        container: "map",
        map: map,
        center: [-35.55, 26.53],
        zoom: 2,
        ui: {
          components: ["attribution"] // empty the UI, except for attribution
        }
      });
      var tileLyr = new VectorTileLayer({
        url: "https://www.arcgis.com/sharing/rest/content/items/4e1133c28ac04cca97693cf336cd49ad/resources/styles/root.json?f=json"
      });
      map.add(tileLyr);

  }
  render() {
    return (
        <div className="app">
          <Header />
          <div id="map"></div>
        </div>
    );
  }
}