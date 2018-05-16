const formatTime = require('./index');

test('formatTime function exists', () => {
  expect(typeof formatTime).toEqual('function');
});

test('Find the time format', () => {
  expect(formatTime([1, 2, 3, 4, 5, 6])).toEqual('12:34:56');
  expect(formatTime([0, 1, 0, 1, 2, 3])).toEqual('00:11:23');
  expect(formatTime([0, 0, 0, 1, 2, 3])).toEqual('00:01:23');
});

test('Incorrect format', () => {
  expect(formatTime([5, 6, 7, 8, 9, 0])).toEqual('Incorrect Input');
});