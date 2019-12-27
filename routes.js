// eslint-disable-next-line no-undef
const nextRoutes = require('next-routes');
const routes = nextRoutes(); //eslint-disable-line

/* FOR HOME PAGE */
routes.add('/', '/home/home');
routes.add('/home', '/home/home');

module.exports = routes;
