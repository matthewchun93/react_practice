const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productControllers')
//@descr GET all products from DB
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@descr GET a product from DB
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router;