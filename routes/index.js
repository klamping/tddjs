/*
 * GET home page.
 */

var days = require('../days').days;

exports.index = function(req, res) {
   res.render('index', {
      title: 'Test-Driven JavaScript',
      days: days,
      activeDay: 0
   });
};