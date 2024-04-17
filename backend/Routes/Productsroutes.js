const express = require('express');
const router = express.Router();
const {authenticate,authorized} = require('../middleware/authentication');
const {getAllProducts,updateProduct,deleteProduct,getSingleProducts,createProduct,uploadImage} = require('../Controller/ProductsController');

router.route('/').get(getAllProducts).post(authenticate,authorized('admin'),createProduct).post(authenticate,authorized('admin'),uploadImage);
router.route('/:id').get(getSingleProducts).patch(authenticate,authorized('admin'),updateProduct).delete(authenticate,authorized('admin'),deleteProduct);

module.exports = router;