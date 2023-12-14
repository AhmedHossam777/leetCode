/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
  return function(...args) {
      return "Hello World"
  }
};


const f = createHelloWorld();
f([{},null,42]); // "Hello World"
