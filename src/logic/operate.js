import operate from './operate';

const calculate = (props, buttonName) => {
  let { total, next, operation } = props;
  if (buttonName === 'A/C') {
    total = null;
    next = null;
    operation = null;
  }
  if (buttonName === '+/-') {
    if (total) total *= -1;
    if (next) next *= -1;
  }
  if (buttonName === '%') {
    if (total) next = 0.01 * total;
  }
  if (buttonName === '=') {
    if (total && next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
  if (['+', '-', 'x', '÷', '%'].includes(buttonName)) {
    operation = buttonName;
  } else if (operation) {
    total += buttonName;
  } else {
    next += buttonName;
  }
  return { total, next, operation };
};

export default calculate;