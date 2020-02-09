/**
 * @param {number} n
 * @return {number[]}
 */
let sumZero = n => {
  let newArr = [];
  if (n % 2 === 1) {
    newArr.push(0);
  }
  for (let i = 1; i <= n / 2; i++) {
    newArr.push(i, -i);
  }
  return newArr;
};
