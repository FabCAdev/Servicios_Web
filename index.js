const express = require('express');
const routerApi = require('./routes/rutas');

const app = express();
const port = 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hola mi server de express");
});

// Ruta adicional
app.get("/nuevaruta", (req, res) => {
  res.send("Hola soy una nueva ruta");
});

// Rutas externas (productsRoutes.js)
routerApi(app);

// Ruta con parámetros dinámicos
app.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Coca-Cola',
    price: 50
  });
});

// Ruta con múltiples parámetros
app.get('/category/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

// Ruta con parámetros query
app.get('/users', (req, res) => {
  const { username, lastname, id } = req.query;

  if (username && lastname && id) {
    res.json({
      username,
      lastname,
      id
    });
  } else {
    res.send('No hay parámetros Query');
  }
});

// Ruta de ejemplo
app.get('/products/filter', (req, res) => {
  res.send('Soy una taza');
});

// Iniciar servidor
app.listen(port, () => {
  console.log("Mi puerto trabaja en: " + port);
});


/*
GET : Obtiene datos
POST : Crea datos
DELETE: Elimina datos
PUT : Actualiza datos (completo)
PATCH : Actualiza datos (parcial)

api.example.com/tasks/{id}/ se visualiza un objeto mediante su id del documento o archivo "tasks"
api.example.com/people/{id}/ se visualiza un objeto mediante su id del documento o archivo "people"
api.example.com/users/{id}/tasks/ se visualiza un solo objeto del documento "users" y se visualizan todas sus tareas
*/
