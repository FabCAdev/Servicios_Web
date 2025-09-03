const express = require('express');
const faker = require('faker');
const router = express.Router();

// 1. Crear el arreglo de productos
const products = [];
for (let i = 0; i < 10; i++) {
  products.push({
    id: faker.datatype.uuid(),
    image: faker.image.imageUrl(),
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price(), 10),
    stock: faker.datatype.number({ min: 0, max: 100 }),
    categoryId: faker.datatype.uuid(),
    brandId: faker.datatype.uuid()
  });
}

// 2. Devolver el arreglo de productos
router.get("/", (req, res) => {
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy una ruta de filtro');
});

// 3. Buscar un producto por ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find(product => product.id === id);

  if (foundProduct) {
    res.json(foundProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
