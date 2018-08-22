const webpack = require('webpack');
const path = require('path');
const Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js and web/build/app.css
    .addEntry('app', './react/app.js')

    .enableVersioning(Encore.isProduction())

    // allow sass/scss files to be processed
    .enableSassLoader()
    .enableReactPreset()

    .addLoader({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
            path.join(__dirname, 'react'),
        ],
        options: {
            plugins: [
                'transform-function-bind',
            ],
            resolve: {
                modules: [
                  path.resolve('./react'),
                  path.resolve('./node_modules')
                ],
              },
        },
    })
    .addLoader({
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
            path.join(__dirname, 'react'),
        ],
        options: {
            failOnWarning: false,
            failOnError: true,
            quiet: true,
        }
    })
    .addPlugin(new webpack.DefinePlugin({
        __DEV__: true,
    }))

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
