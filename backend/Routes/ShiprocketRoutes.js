const express =  require("express");
const router = express.Router();
const {login,createOrderShipRocket,tracking} = require('../Controller/ShipRocket');
 

router.route('/').post(login);
router.route('/createorder').post(createOrderShipRocket);
router.route('/track').post(tracking);

module.exports = router;
