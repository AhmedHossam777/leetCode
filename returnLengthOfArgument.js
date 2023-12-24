/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = function(...args) {
  let arr = args;
  return arr.length
};

console.log(argumentsLength(1, 2, 3)); // 3
