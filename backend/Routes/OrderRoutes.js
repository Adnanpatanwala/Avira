const express = require('express');
const router = express.Router();
const {authenticate,authorized} = require('../middleware/authentication');
const {createOrder,validate} = require('../Controller/OrderController');

router.route('/').post(authenticate,createOrder);
router.route("/validate").post(authenticate,validate);


module.exports = router;