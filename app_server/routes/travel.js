var express = require('express');
var router = express.Router();  

var ctrTravel = require('../controllers/travel');

/* GET travel page. */

router.get('/', ctrTravel.travel);

module.exports = router;