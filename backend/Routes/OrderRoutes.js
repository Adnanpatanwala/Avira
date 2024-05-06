const express = require('express');
const router = express.Router();
const {createOrder,validate} = require('../Controller/OrderController');

router.route('/').post(createOrder);
router.route("/validate").post(validate);


module.exports = router;