import React, { Component } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

export default class HelloWorld extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
      var map = new Map({
      basemap: "topo"
    });

    var view = new MapView({
      container: "map",
      map: map,
      center: [-100.33, 25.69],
      zoom: 10,
      ui: {
      components: ["attribution"] // empty the UI, except for attribution
      }
    });

  }
  render() {
    return (
        <div id="map"></div>
    );
  }
}