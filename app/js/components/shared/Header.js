import React, { Component } from 'react';
import {observer} from 'mobx-react';
@observer
export default class Header extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {
    return (
        <header className="top-nav fade-in">
            <div className="grid-container">
                <div className="column-24">
                <div className="tablet-hide">
                    <a href="#" className="top-nav-title"> Zooming in/out</a>
                    <nav className="top-nav-list" role="navigation" aria-labelledby="topnav">
                    <a className="top-nav-link" href="#">Zoom level = {this.props.store.zoomLevel}</a>
                    {/* <a className="top-nav-link" href="#">Plans</a>
                    <a className="top-nav-link" href="#">Docs</a> */}
                    </nav>
                    <nav className="className-top-nav-list right" role="navigation" aria-labelledby="usernav">
                    <form method="GET" action="/search/" className="inline-block padding-leader-half">
                        <input type="search" placeholder="Search" name="q" />
                        <button type="submit" className="hide">Search</button>
                    </form>
                    <a className="top-nav-link icon-ui-user margin-left-1" href="#">Sign In</a>
                    <a className="btn btn-clear margin-left-1" href="#">Sign Up</a>
                    </nav>
                </div>
                <div className="tablet-show top-nav-flex">
                    <nav className="top-nav-flex-list" role="navigation" aria-labelledby="topnav">
                    <a href="/" className="icon-ui-menu top-nav-link js-drawer-toggle" data-drawer="top-nav"><span className="phone-hide">Menu</span></a>
                    </nav>
                    <header className="top-nav-flex-title">
                    <a href="/" className="top-nav-link">ESRI React Mobx Webpack</a>
                    </header>
                    <nav className="top-nav-flex-list text-right" role="navigation" aria-labelledby="usernav">
                    <a className="top-nav-link icon-ui-search js-drawer-toggle" href="#" aria-label="Search"><span className="phone-hide">Search</span></a>
                    <a className="top-nav-link icon-ui-user margin-left-1 js-drawer-toggle" href="#" aria-label="Sign In"><span className="phone-hide">Sign In</span></a>
                    </nav>
                </div>
                </div>
            </div>
        </header>
 
    );
  }
} 


 