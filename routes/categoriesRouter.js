const express = require('express');
const faker = require('faker');
const router = express.Router();

// 1. Crear el arreglo de categorías
const categories = [];
for (let i = 0; i < 10; i++) {
  categories.push({
    id: faker.datatype.uuid(),
    categoryName: faker.commerce.department(),
    description: faker.lorem.sentence(),
    active: faker.datatype.boolean()
  });
}

// 2. Devolver el arreglo de categorías
router.get('/', (req, res) => {
  res.json(categories);
});

// 3. Buscar una categoría por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundCategory = categories.find(category => category.id === id);

  if (foundCategory) {
    res.json(foundCategory);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

module.exports = router;
