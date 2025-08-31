const productsRouters = require('./productsRouter');
const categoriesRouters = require('./categoriesRouter');
const usersRouters = require('./usersRouter');
const brandsRouters = require('./brandsRouter');

function routerAPI(app) {
  app.use('/products', productsRouters);
  app.use('/categories', categoriesRouters);
  app.use('/users', usersRouters);
  app.use('/brands', brandsRouters);
}

module.exports = routerAPI;
