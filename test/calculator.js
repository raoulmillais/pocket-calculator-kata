'use strict';

const test = require('tape');

const Calculator = require('../lib/calculator')

test('Let\'s just see that we can turn it on first', (assert) => {

  assert.comment('Given I have a pocket calculator')

  assert.deepEqual(Calculator().ac().print(), 0, 'When I press "AC" Then the display shows "0."');

  assert.end()
});



