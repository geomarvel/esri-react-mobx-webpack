import React, { Component } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from "esri/layers/VectorTileLayer";
import MapImageLayer from "esri/layers/MapImageLayer";
import LayerList from "esri/widgets/LayerList";
import GroupLayer from "esri/layers/GroupLayer";
import Header from './shared/Header';
import Controls from './Controls';
import {observer} from 'mobx-react';

@observer
export default class HelloWorld extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    var tileLyr = new VectorTileLayer({
        url: "https://www.arcgis.com/sharing/rest/content/items/4e1133c28ac04cca97693cf336cd49ad/resources/styles/root.json?f=json",
        title:"Basemap"
      });
      
      const promise = new MapView({
        container:"map",
        map: new Map({
          basemap: 'streets-vector',
          layers:[tileLyr]
        }),
        center: [-35.55, 26.53],
        zoom: this.props.store.zoomLevel,
        ui: {
          components: ["attribution"] // empty the UI, except for attribution
        }
      });

      promise.then(function(view){
        this.props.store.view = view;
      }.bind(this));

      promise.watch("zoom", function(response){
        this.props.store.zoomLevel = parseInt(response);
      }.bind(this));

  }
  render() {
    return (
        <div className="app">
          <Header store={this.props.store}/>
          <div id="map">
            <Controls store={this.props.store} />
          </div>
        </div>
    );
  }
}