const { getZip } = require('./util');

const address = '1875 Turk St. Apt. 2, San Francisco, CA 94115';

test('getting zip', () => {
  expect(getZip(address)).toBe('94115');
});
