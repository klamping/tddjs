/*
 * GET day page.
 */
//
var days = [{
   title: 'Day One - First Steps'
}, {
   title: 'Day Two - Testing Trim'
}, {
   title: 'Day Three - Assertions'
}, {
   title: 'Day Four - BDD, Other Libraries, Test Setup' //
}, {
   title: 'Day Five' // Asynchronous code/Working with the dom (Mock Objects)/Simulated Event
}, {
   title: 'Day Six'  // Functional testing - PhantomJS & CasperJS
}, {
   title: 'Day Seven' // Why this is hard... Writing Testable JavaScript
}, {
   title: 'Day Eight' // YETI, Common patterns
}, {
   title: 'Day Nine' // Toggle - Day One (Defining Requirements, Unit tests)
}, {
   title: 'Day Ten' // Toggle Day Two (Functional Tests)
}];

exports.view = function(req, res){
   var day = req.params.num;
  res.render('day-' + day, {
     title: days[day - 1].title,
     days: days,
     activeDay: day
  });
};