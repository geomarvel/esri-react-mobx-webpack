import React, {Component} from 'react';
import {observer} from 'mobx-react';

const zoomOutSvg = '<use xlink:href="#icon-zoom-out" />',
      zoomInSvg = '<use xlink:href="#icon-zoom-in" />',
      locateSvg = '<use xlink:href="#icon-locate" />',
      shareSvg = '<use xlink:href="#icon-share" />';

const animationOptions = { duration: 300 };
@observer
export default class Controls extends Component {
    constructor(props){
        super(props)
        // this.props = props
    }
  zoomIn = () => {
    const {view} = this.props.store;
    if (view) {
      view.goTo({ zoom: view.zoom + 1 }, animationOptions);
      // this.props.store.zoomLevel = view.zoom + 1
    }
  };

  zoomOut = () => {
    const {view} = this.props.store;
    if (view) {
      view.goTo({ zoom: view.zoom - 1 }, animationOptions);
      // this.props.store.zoomLevel = view.zoom - 1 ;
    }
  };

  locate = () => {
    // appStore.dispatch(toggleLocateModal({ visible: true }));
  };

  share = () => {
    // appStore.dispatch(toggleShareModal({ visible: true }));
  };

  render () {
    return (
      <div className='map-controls shadow '>
          <ul className='map-controls__list'>
            <li className='map-controls__item' onClick={this.zoomOut.bind(this)}>
                  <span className="icon-ui-minus map-controls__item-icon"></span>
            </li>
            <li className='map-controls__item' onClick={this.zoomIn.bind(this)}>
                <span className="icon-ui-plus map-controls__item-icon"></span>
            </li>
            <li className='map-controls__item'>
                <span className="icon-ui-share map-controls__item-icon"></span>
            </li>
            <li className='map-controls__item'>
                <span className="icon-ui-locate map-controls__item-icon"></span>
            </li>
          </ul>
      </div>
    );
  }
}