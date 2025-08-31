const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    categories.push({
      id: faker.datatype.uuid(),
      categoryName: faker.commerce.department(),
      description: faker.lorem.sentence(),
      active: faker.datatype.boolean()
    });
  }

  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    categoryName: faker.commerce.department(),
    description: faker.lorem.sentence(),
    active: faker.datatype.boolean()
  });
});

module.exports = router;
