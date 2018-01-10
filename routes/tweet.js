var express = require('express');
var router = express.Router();
var Tweet = require('../tweetStorage');

router.get('/', function (req, res, next) {
    res.status(200).send(Tweet.getAllTweets());
  });

module.exports = router;