'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash'),
  pythonShell = require('python-shell');

/**
 * Create a Revenue
 */
exports.create = function (req, res) {
  function _dateString(date) {
    var retVal = date.getFullYear() + '-' + ('00' + (date.getMonth() + 1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);
    return retVal;
  }

  var appDir = path.dirname(require.main.filename);
  var query = JSON.parse(JSON.stringify(req.body));

  var date = new Date(query.date);

  var scriptArgs = {
    select : query.select,
    date : _dateString(date),
    text : query.text,
  };

  var options = {
    mode: 'json',
    pythonPath: appDir + '/python/environment/bin/python',
    scriptPath: __dirname + '/../scripts',
    args: [JSON.stringify(scriptArgs)]
  };

  pythonShell.run('form.py', options, function (error, results) {
    if (error) {
      console.log(error);
      delete query.data;
    } else {
      var data = results[0];
      query.data = data;
    }
    res.json(query);
  });
};

/**
 * Show the current Revenue
 */
exports.read = function (req, res) {
};

/**
 * Update a Revenue
 */
exports.update = function (req, res) {
};

/**
 * Delete an Revenue
 */
exports.delete = function (req, res) {
};

/**
 * List of Revenues
 */
exports.list = function (req, res) {
};
