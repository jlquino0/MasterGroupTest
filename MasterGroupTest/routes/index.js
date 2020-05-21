'use strict';
var express = require('express');
var router = express.Router();

var credentials = require('../controllers/credential.controller.js');
var messages = require('../controllers/message.controller.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express Master Group Test' });
});


router.put('/credential', credentials.create);
router.get('/credentials', credentials.findAll);
router.post('/message', messages.create);
router.get('/messages/:tag', messages.findAllTag);
router.get('/message/:id', messages.findAllId);
router.get('/messages', messages.findAll);

module.exports = router;
