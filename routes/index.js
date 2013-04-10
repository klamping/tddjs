
/*
 * GET home page.
 */
var days = [
   { title: 'Day One - First Steps' },
   { title: 'Day Two - Testing Trim' },
   { title: 'Day Three - Assertions' },
   { title: 'Day Four' },
   { title: 'Day Five' },
   { title: 'Day Six' },
   { title: 'Day Seven' },
   { title: 'Day Eight' },
   { title: 'Day Nine' },
   { title: 'Day Ten' }
];

exports.index = function(req, res){
  res.render('index', { title: 'Test-Driven JavaScript', days: days, activeDay: 0 });
};

