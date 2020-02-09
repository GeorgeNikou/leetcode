/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  var newArr = [];
  var tempNum;
  var counter = 0;
  do {
    if (num % 2 == 0) {
      tempNum = num;
      num = num / 2;
      counter++;
      // console.log('Step ' + counter + ') ' + tempNum + ' is even; divide by 2 and obtain ' + num + '.');
    //   newArr.push(
    //     'Step ' +
    //       counter +
    //       ') ' +
    //       tempNum +
    //       ' is even; divide by 2 and obtain ' +
    //       num +
    //       '.'
    //   );
    } else {
      tempNum = num;
      num = num - 1;
      counter++;
      // console.log('Step ' + counter + ') ' + tempNum + ' is odd; subtract by 1 and obtain ' + num + '.');
    //   newArr.push(
    //     'Step ' +
    //       counter +
    //       ') ' +
    //       tempNum +
    //       ' is odd; subtract by 1 and obtain ' +
    //       num +
    //       '.'
    //   );
    }
  } while (num != 0);

  return counter;
  // return newArr.values();
//   console.log('new Arr:', newArr);
};
