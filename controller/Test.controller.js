const service = require('../services/Test.service')

function getTest(req, res) {
    service.getTest(req, res)
}

function postTest(req, res) {
    service.postTest(req, res)
}
function getLeadList(req, res) {
    service.getList(req, res)
}
function getLatLonDetails(req, res) {
    service.getLatLonDetails(req, res)
}
function login(req, res) {
    service.login(req, res)
}
module.exports = { getTest,postTest,getLeadList,getLatLonDetails,login };