const { getHouseNumber, getZip, getState, getAptUnitSuite } = require('./util');

const address = '1875 Turk St. Apt. 2, San Francisco, CA 94115';

test('getting house number', () => {
  expect(getHouseNumber(address)).toBe('1875');
});

test('getting zip', () => {
  expect(getZip(address)).toBe('94115');
});

test('getting state', () => {
  expect(getState(address)).toBe('CA');
});

test('getting apt, unit, or suite', () => {
  expect(getAptUnitSuite(address)).toBe('Apt. 2');
});
