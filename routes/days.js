/*
 * GET day page.
 */
//  
var days = [
   { title: 'Day One - First Steps' },
   { title: 'Day Two - Testing Trim' },
   { title: 'Day Three' },
   { title: 'Day Four' },
   { title: 'Day Five' },
   { title: 'Day Six' },
   { title: 'Day Seven' },
   { title: 'Day Eight' },
   { title: 'Day Nine' },
   { title: 'Day Ten' },
];

exports.view = function(req, res){
  res.render('day-' + req.params.num, { title: days[req.params.num - 1].title });
};