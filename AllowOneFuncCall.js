/**
 * @param {Function} fn
 * @return {Function}
 */

const once = function(fn) {
  let called = false;
  let result;
  
  return function(...args){
    if(!called){
      result = fn(...args);
      called = true;
      return result;
    }
  }
  
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
