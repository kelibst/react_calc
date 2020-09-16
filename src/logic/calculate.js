/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
import { operate, history } from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;

  switch (btnName) {
    case 'AC':
      total = '0';
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) {
        next = operate(next, '-1', 'X');
      } else {
        total = operate(total, '-1', 'X');
      }
      break;

    case '%':
      if (next) {
        total = operate(total, next, operation);
        total = operate(total, '100', '÷');
        next = null;
        operation = null;
      } else {
        total = operate(total, '100', '÷');
      }
      break;

    case '=':
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;

    case '.':
      const patt = /[.]/m;
      if (!(patt.test(total))) {
        total += '.';
      } else if (operation) {
        next = '0.';
      } else {
        return;
      }
      break;

    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) {
        next += btnName;
      } else if (operation) {
        next = btnName;
      } else if (total === '0' || total === null) {
        total = btnName;
      } else {
        total += btnName;
      }
      break;

    default:
      if (next) {
        total = operate(total, next, operation);
        next = null;
        operation = btnName;
      } else {
        operation = btnName;
      }
  }

  return {
    total, next, operation, history,
  };
};

export default calculate;
