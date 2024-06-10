const express = require('express');
const router = express.Router();
const {authenticate,authorized} = require('../middleware/authentication');
const {createOrder,validate,getOrder,deleteOrder,getSingleOrder} = require('../Controller/OrderController');

const {authenticateShiprocket} = require('../middleware/shiprocketauthentication');

router.route('/').post(authenticate,createOrder).get(authenticate,getOrder).delete(authenticate,deleteOrder);
router.route("/singleorder").post(authenticate,getSingleOrder);
 
router.route("/validate").post(validate);

router.route('/login').post(authenticateShiprocket);

module.exports = router;

  