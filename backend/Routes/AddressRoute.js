const express = require('express');
const router = express.Router();
const {authenticate} = require('../middleware/authentication');
const {Addaddress,getaddress} = require('../Controller/AddressController');

router.route('/').post(Addaddress).get(getaddress); 


module.exports = router;