const express = require('express');
const faker = require('faker');
const router = express.Router();

//array faker
const users = [];
for (let i = 0; i < 10; i++) {
  users.push({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    password: faker.internet.password()
  });
}

//usuarios
router.get('/', (req, res) => {
  res.json(users);
});

//id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find(user => user.id === id);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
