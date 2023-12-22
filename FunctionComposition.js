/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
  return function(x) {
      return functions.reduceRight((acc, fn) => fn(acc), x);
  }
};

// Test cases
let functions = [x => x + 1, x => x * x, x => 2 * x];
let fn = compose(functions);
console.log(fn(4)); // Output: 65

functions = [x => 10 * x, x => 10 * x, x => 10 * x];
fn = compose(functions);
console.log(fn(1)); // Output: 1000

functions = [];
fn = compose(functions);
console.log(fn(42)); // Output: 42
