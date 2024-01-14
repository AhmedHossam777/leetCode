/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
  return async function(...args) {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });

    const result = fn(...args);
    return Promise.race([result, timeout]);
  };
}
/**
* const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
* limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/