/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i],i)) newArr.push(arr[i]);
  }
  return newArr;
};
const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  if (n > 10) return n;
};

const newArr = filter(arr, fn);
console.log(newArr);
