const express = require('express')
var router = express.Router()
const controller = require('../controller/Test.controller')

router.get('/getTest', controller.getTest);
router.post('/postTest', controller.postTest);
router.get('/getLeadList', controller.getLeadList);
router.post('/getLatLongDetails', controller.getLatLonDetails);
router.post('/login', controller.login);

module.exports = router