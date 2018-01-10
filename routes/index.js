// Where you will connect your other routers
var express = require('express');
var router = express.Router();


router.use('/user', require('./user'));

router.use('/tweet', require('./tweet'));

module.exports = router;
