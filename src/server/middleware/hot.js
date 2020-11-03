import webpack from 'webpack';
import webpackConfig from '../../../scripts/webpack/webpack.dev';

export default (app) => {
    const compiler = webpack(webpackConfig);

    app.use([
        require('webpack-dev-middleware')(compiler, {
            publicPath: webpackConfig.output.publicPath,
            historyApiFallback: false,
            noInfo: true,
            hot: true,
            silent: true,
            stats: 'errors-only',
            headers: {}
        }),
        require('webpack-hot-middleware')(compiler, {
            log: console.log, // eslint-disable-line no-console
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000
        })
    ]);

    return compiler;
};
