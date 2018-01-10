var express = require('express');
var router = express.Router();
var User = require('../userStorage');


router.get('/', function (req, res, next) {
    res.status(200).send(User.getAllUsers());
 });


module.exports = router;