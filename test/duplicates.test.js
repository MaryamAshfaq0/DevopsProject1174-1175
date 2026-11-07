const test = require('node:test');
const assert = require('node:assert');
const { isDuplicate } = require('../tools/duplicates');

test('same page is a duplicate', () => {
  assert.strictEqual(isDuplicate({ title: 'a', body: 'x' }, { title: 'a', body: 'x' }), true);
});

test('different body is not a duplicate', () => {
  assert.strictEqual(isDuplicate({ title: 'a', body: 'x' }, { title: 'a', body: 'y' }), false);
});
