const express = require('express');
const router = express.Router();
const {createOrder} = require('../Controller/OrderController');

router.route('/').post(createOrder);


module.exports = router;