/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
  const newArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }

  return newArray;
}