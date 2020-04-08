const calculate = (props, buttonName) => {
  let { total, next, operation } = props;
  if (buttonName === '+/-') {
    if (total) total *= -1;
    if (next) next *= -1;
  }
  if (buttonName === 'A/C') {
    total = null;
    next = null;
    operation = null;
  }
  if (buttonName === '%') {
    next = 0.01 * total;
  }
  return { total, next, operation };
};

export default calculate;
