'use strict';


/**
 *
 * testlocation String 
 * returns tests
 **/
exports.testGET = function(testlocation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Yeild" : "70 kilotons",
  "CodeName" : "Dog",
  "Lng" : 6,
  "OperationName" : "Operation Greenhouse",
  "Device" : "Mark 6",
  "Purpose" : "weapon development",
  "DateTime" : 0,
  "Elevation + Height" : 2,
  "Country" : "USA",
  "id" : 1,
  "Delivery" : "Tower",
  "Lat" : 1,
  "Location" : "Runit (\"Yvonne\") Island"
}, {
  "Yeild" : "70 kilotons",
  "CodeName" : "Dog",
  "Lng" : 6,
  "OperationName" : "Operation Greenhouse",
  "Device" : "Mark 6",
  "Purpose" : "weapon development",
  "DateTime" : 0,
  "Elevation + Height" : 2,
  "Country" : "USA",
  "id" : 1,
  "Delivery" : "Tower",
  "Lat" : 1,
  "Location" : "Runit (\"Yvonne\") Island"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new test
 *
 * body Test  (optional)
 * no response value expected for this operation
 **/
exports.testPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * returns tests
 **/
exports.testidGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Yeild" : "70 kilotons",
  "CodeName" : "Dog",
  "Lng" : 6,
  "OperationName" : "Operation Greenhouse",
  "Device" : "Mark 6",
  "Purpose" : "weapon development",
  "DateTime" : 0,
  "Elevation + Height" : 2,
  "Country" : "USA",
  "id" : 1,
  "Delivery" : "Tower",
  "Lat" : 1,
  "Location" : "Runit (\"Yvonne\") Island"
}, {
  "Yeild" : "70 kilotons",
  "CodeName" : "Dog",
  "Lng" : 6,
  "OperationName" : "Operation Greenhouse",
  "Device" : "Mark 6",
  "Purpose" : "weapon development",
  "DateTime" : 0,
  "Elevation + Height" : 2,
  "Country" : "USA",
  "id" : 1,
  "Delivery" : "Tower",
  "Lat" : 1,
  "Location" : "Runit (\"Yvonne\") Island"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

