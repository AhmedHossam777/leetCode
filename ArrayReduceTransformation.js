/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
  let val = init
  for(const element of nums){
    val = fn(val,element)
  }
  return val;
};