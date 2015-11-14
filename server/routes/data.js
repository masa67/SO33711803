
'use strict';

var express = require('express');
var router = express.Router();

router.get('/listingscount/', function (req, res) {
    var count = 13;
    console.log('count: ' + count);
    res.jsonp({ count: count });
});

module.exports = router;
