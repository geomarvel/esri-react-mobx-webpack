import React, { Component } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from "esri/layers/VectorTileLayer";
import MapImageLayer from "esri/layers/MapImageLayer";
import LayerList from "esri/widgets/LayerList";
import GroupLayer from "esri/layers/GroupLayer";
import Header from './shared/Header';
import Controls from './Controls';

export default class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      view:{}
    }
  }
  componentDidMount(){
    var tileLyr = new VectorTileLayer({
        url: "https://www.arcgis.com/sharing/rest/content/items/4e1133c28ac04cca97693cf336cd49ad/resources/styles/root.json?f=json",
        title:"Basemap"
      });

      // var map = new Map();
      // map.add(tileLyr);
      
      const promise = new MapView({
        container:"map",
        map: new Map({
          basemap: 'streets-vector'
        }),
        center: [-35.55, 26.53],
        zoom: 2,
        ui: {
          components: ["attribution"] // empty the UI, except for attribution
        }
      });
      promise.then(function(view){
        this.setState({view: view});
      }.bind(this));

  }
  render() {
    return (
        <div className="app">
          <Header />
          <div id="map">
            <Controls view={this.state.view} />
          </div>
        </div>
    );
  }
}