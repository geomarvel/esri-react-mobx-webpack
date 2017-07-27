import React from 'react';
import ReactDOM from 'react-dom';
import HelloMap from './components/HelloMap';
import {config as config} from './config';
console.log(config.production)
//Only for development
if (!config.production){
  require("../css/app.styl")
}

ReactDOM.render(
  <HelloMap />,
  document.getElementById('app')
);