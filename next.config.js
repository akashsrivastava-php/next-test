const dotenv = require('dotenv');

/* WEBPACK OPTIMIZER */
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')
const envFile = dotenv.config({ path: `./.env` });
const environment = envFile.parsed.NODE_ENV

const { parsed } = dotenv.config({ path: `./.environment/.env.${environment}` });

process.env.ENV_FILE = `./.environment/.env.${environment}`

module.exports = withSass(
    withCss({
        cssLoaderOptions: {
            url: false,
        },
        env: {
            'customKey': parsed
        },
        useFileSystemPublicRoutes: false,
        webpack: config => {

            /* LOADER FOR FONTS */
            config.module.rules.push({
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5,
                        name: 'static/fonts/[hash].[ext]',
                        publicPath: '/_next',
                    },
                },
            });

            /* LOADER FOR IMAGES */
            config.module.rules.push({
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                },
            });
            return config;
        }
    })
)
