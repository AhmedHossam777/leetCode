let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sortEvenOdd = (arr) => {
  let even = [];
  let odd = []
  for (const element of arr) {
    if(element %2 === 0 ){
      even.push(element)
    }else{
      odd.push(element)
    }
  }
  arr = [...even,...odd]
  return arr;
};

console.log(sortEvenOdd(arr));
