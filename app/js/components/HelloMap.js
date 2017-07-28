import React, { Component } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from "esri/layers/VectorTileLayer";
import MapImageLayer from "esri/layers/MapImageLayer";
import LayerList from "esri/widgets/LayerList";
import GroupLayer from "esri/layers/GroupLayer";
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
        url: "https://www.arcgis.com/sharing/rest/content/items/4e1133c28ac04cca97693cf336cd49ad/resources/styles/root.json?f=json",
        title:"Basemap"
      });
      var householdIncomeLayer = new MapImageLayer({
        url: "https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_Median_Household_Income/MapServer",
        title: "US Median Household Income"
      });
      var medianNetWorthLayer = new MapImageLayer({
        url: "https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_Median_Net_Worth/MapServer",
        title: "US Median Net Worth",
        visibility: false
      });
      var demographicGroupLayer = new GroupLayer({
        title: "US Demographics",
        visibility: true,
        visibilityMode: "exclusive",
        layers: [householdIncomeLayer, medianNetWorthLayer],
        opacity: 0.75
      });
      view.then(function(){
        var layerList = new LayerList({
          view: view
        });
        view.ui.add(layerList, "bottom-right");
      })
      map.add(tileLyr);
      map.layers = [demographicGroupLayer];

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