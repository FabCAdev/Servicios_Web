const productsRouters = require('./productsRouters');

function routerAPI(app) {
  app.use('/products', productsRouters);

}

module.exports = routerAPI;
