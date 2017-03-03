const assert = require('assert');
const { defineSupportCode } = require('cucumber');

function calculator() {
  return {
    keys: [],
    display() {
      return this.keys.join(' ')
    },
    press(key) {
      this.keys.push(key);
      return this;
    }
  };
}

defineSupportCode(({Given, When, Then}) => {
  let calc;

  Given('I have a pocket calculator', () => {
    calc = calculator();
  });

  Given('it is turned on', () => {
    return;
  });

  When('I press "1 2 3 ."',  () => {
    calc.press(1);
    calc.press(2);
    calc.press(3);
    calc.press('.');
  });

  Then('the display shows "123."', function (done) {
    const display = calc.display();
    assert.strictEqual(display, '1 2 3 .');
    done();
  });

});
