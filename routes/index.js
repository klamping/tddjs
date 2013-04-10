/*
 * GET home page.
 */

var days = [{
   title: 'Day One - First Steps'
}, {
   title: 'Day Two - Testing Trim'
}, {
   title: 'Day Three - Assertions'
}, {
   title: 'Day Four' // Test setup/teardown, Mock Objects
}, {
   title: 'Day Five' // Asynchronous code/Working with the dom/Simulated Event
}, {
   title: 'Day Six'  // Functional testing - PhantomJS & CasperJS
}, {
   title: 'Day Seven' // Why this is hard... Writing Testable JavaScript
}, {
   title: 'Day Eight' // YETI, Common patterns
}, {
   title: 'Day Nine' // Toggle - Day One (Defining Requirements, BDD, Unit tests)
}, {
   title: 'Day Ten' // Toggle Day Two (Functional Tests)
}];

exports.index = function(req, res) {
   res.render('index', {
      title: 'Test-Driven JavaScript',
      days: days,
      activeDay: 0
   });
};