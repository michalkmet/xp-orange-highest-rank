const hello = require('./hello');

describe('hello test', () => {
  it('should return hello', () => {
    expect(hello()).toBe('hello');
  });
});
