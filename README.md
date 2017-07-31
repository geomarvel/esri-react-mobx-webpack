# esri-react-mobx-webpack
> Simple boilerplate demonstrating how to setup a project using React, Mobx, Webpack and Esri JavaScript API with Calcite Web. Demo available at [https://geomarvel.github.io/esri-react-mobx-webpack/](https://geomarvel.github.io/esri-react-mobx-webpack/).

### Getting started
This project requires [Node.js](https://nodejs.org/en/)

1. Install dependencies: `npm install`
2. `npm start`

### NPM scripts
`npm start`
> Starts the babel-cli, watches your html, stylus and js files for changes, and starts an webpack dev server with hot module replacement enabled.

`npm run build`
> Generates an optimized build in the dist directory. It uses webpack to transpile, bundle, and minify the src as well as many other things, like inline css and inject hash numbers into html for optimal performance and automated cache-busting. For more info, see [Building - Webpack](#building---webpack).

#### CSS Preprocessing - Stylus
This uses a stylus loader in webpack so you can just import your stylus in your components. Webpack will inject these as style tags in dev mode so you get live reload of css.

#### ES6 - Babel
This uses Babel for transpiling the build, it also uses `React`, `es2015`, and `stage-0` presets so I can play with the latest ES6 features.  It will strip the Flow types from the code when it compiles to AMD so that there is no issue at runtime in the browser.

#### Building - Webpack
Webpack and dojo used to not play nice together, but using wepack externals which cleverly handled the esri dependencies as externals and built to AMD.  Now we have Webpack and dojo working together.  This also uses hot module replacement, so if you edit your components, it can swap them out on the fly without reloading the whole page.

```javascript
    externals: [
        function(context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
    ],

```


#### Resources
* [React](https://facebook.github.io/react/)
* [Mobx](mobx.js.org)
* [Webpack](https://webpack.github.io/)
* [ArcGIS JavaScript API](https://js.arcgis.com)
* [Calcite Web] (http://esri.github.io/calcite-web/)