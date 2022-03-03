'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.testGET = function testGET (req, res, next, testlocation) {
  Default.testGET(testlocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.testPOST = function testPOST (req, res, next, body) {
  Default.testPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.testidGET = function testidGET (req, res, next, id) {
  Default.testidGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
