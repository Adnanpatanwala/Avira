const express = require('express');
const router = express.Router();
const {sentOtp,recieveOtp} = require('../Controller/verifyOtp');

router.route('/sentotp').post(sentOtp);
router.route('/recieveotp').post(recieveOtp);

module.exports = router;