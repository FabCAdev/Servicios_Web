const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    users.push({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    });
  }

  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.name.findName(),
    username: faker.internet.userName(),
    password: faker.internet.password()
  });
});

module.exports = router;
