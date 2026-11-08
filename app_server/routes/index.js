var express = require('express');
var router = express.Router();

var ctrMain = require('../controllers/main');

router.get('/', ctrMain.index);

/* GET home page. */

module.exports = router;
