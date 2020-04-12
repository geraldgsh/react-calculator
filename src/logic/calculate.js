import operate from './operate';

const calculate = (props, buttonName) => {
  let { total, next, operation } = props;
  const operands = ['+', 'X', '-', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (buttonName === 'AC') {
    [total, next, operation] = [null, null, null];
  }
  if (buttonName === '+/-') {
    if (total) (total *= -1);
    if (next) (next *= -1);
    operation = null;
  }
  if (buttonName === '%') {
    if (total) next = (0.01 * total);
  }
  if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
  if (operands.includes(buttonName)) {
    if (total) operation = buttonName;
  } else if (operation && nums.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  } else if (total && nums.includes(buttonName)) {
    total = buttonName;
  } else if (nums.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  } else if (!next && !operation && buttonName === '.') {
    total = total.includes(buttonName) ? total : total + buttonName;
  } else if (total && operation && buttonName === '.') {
    next = next.includes(buttonName) ? next : next + buttonName;
  }
  return { total, next, operation };
};

export default calculate;
