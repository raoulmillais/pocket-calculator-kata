
class Calculator {
  constructor () {
    this.result = 0;
    this.operator = null;
  }

  ac () {
    this.result = 0;
    this.operator = null;
  }

  sum (value) {
    this.result += value;
  }

  sub (value) {
    this.result -= value;
  }

  mult (value) {
    this.result *= value;
  }

  div (value) {
    this.result /= value;
  }
}

module.exports = () => {
  return new Calculator();
};
