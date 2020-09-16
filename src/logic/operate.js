/* eslint-disable import/no-mutable-exports */
import Big from 'big.js';

let history = null;
const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  history = `${numberOne} ${operation} ${numberTwo}`;
  let result;
  switch (operation) {
    case '+':
      result = one.plus(two);
      break;
    case '-':
      result = one.minus(two);
      break;
    case 'X':
      result = one.times(two);
      break;
    case '÷':
      if (two === '0') {
        result = undefined;
      }
      result = one.div(two);
      break;

    default:
      result = one;
  }
  return result.toString();
};

export { operate, history };
