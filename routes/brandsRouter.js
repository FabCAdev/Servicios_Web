const express = require('express');
const faker = require('faker');
const router = express.Router();

// 1. Crear el arreglo de marcas
const brands = [];
for (let i = 0; i < 10; i++) {
  brands.push({
    id: faker.datatype.uuid(),
    brandName: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    active: faker.datatype.boolean()
  });
}

// 2. Devolver el arreglo de marcas
router.get('/', (req, res) => {
  res.json(brands);
});

// 3. Buscar una marca por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundBrand = brands.find(brand => brand.id === id);

  if (foundBrand) {
    res.json(foundBrand);
  } else {
    res.status(404).json({ message: 'Brand not found' });
  }
});

module.exports = router;
