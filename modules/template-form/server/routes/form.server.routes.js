'use strict';

var templateFormPolicy = require('../policies/templateform.server.policy');
var form = require('../controllers/form.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/templateform/reports/form').all(templateFormPolicy.isAllowed)
    .post(form.create);
};
