'use strict'

const express = require('express');

let router = express.Router();

router.use('/superheros', require('./superheros'));

module.exports = router;