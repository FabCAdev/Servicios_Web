const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const brands = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    brands.push({
      id: faker.datatype.uuid(),
      brandName: faker.company.companyName(),
      description: faker.company.catchPhrase(),
      active: faker.datatype.boolean()
    });
  }

  res.json(brands);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    brandName: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    active: faker.datatype.boolean()
  });
});

module.exports = router;
