/*
 * GET day page.
 */
//

var days = require('../days').days;

exports.view = function(req, res){
   var day = req.params.num;
  res.render('day-' + day, {
     title: days[day - 1].title,
     days: days,
     activeDay: day
  });
};