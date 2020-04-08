import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const [one, two] = [Big(numberOne), Big(numberTwo)];
  switch (operation) {
    case '+':
      return one.plus(two);
    case '-':
      return one.minus(two);
    case 'x':
      return one.times(two);
    case '/':
      return one.div(two);
  }

}

export default operate;