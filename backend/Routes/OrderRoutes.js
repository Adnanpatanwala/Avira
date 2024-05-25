const express = require('express');
const router = express.Router();
const {authenticate,authorized} = require('../middleware/authentication');
const {createOrder,validate,getOrder} = require('../Controller/OrderController');

router.route('/').post(authenticate,createOrder).get(authenticate,getOrder);
router.route("/validate").post(validate);

module.exports = router;

  