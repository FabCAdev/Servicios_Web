const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
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
  res.json(products); // Mueve el return fuera del for
});

router.get('/filter', (req,res)=>{
  res.send('Soy una ruta de filtro')
})
router.get("/:id", (req, res) =>{
  const{id} = req.params;//Extraemos el parametro id de los parametros ruta
  res.json({
    id,
    image: faker.image.imageUrl(),
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.datatype.number({ min: 0, max: 100 }),
    categoryId: faker.datatype.uuid(),
    brandId: faker.datatype.uuid()
  });
});
module.exports = router;
