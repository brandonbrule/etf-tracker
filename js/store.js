// -- Store -- //
// Store Rules **
// Every module must go through the store
// Every module must be served the event data
// Your module must decide what's important
var Store = (function() {
  

  // All Modules
  // Are Purely Optional
  // Add your own Functions
  // Your funtion must determine if data matters
  var init = function(e) {

    // State Module
    // State of all its-control
    var state = State.init(e);
    
    
    // Update its-view elements 
    // with coorisponding control value.
    Views.init(e);
    ETFTransaction.init(e, state);
  };

  return {
    init: init
  };

})();