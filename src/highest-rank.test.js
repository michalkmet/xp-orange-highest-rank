const highestRank = require('./highest-rank');

describe('Story1: small number in arr', () => {
  it('sUAT1.1: When I pass [0] , then I should see the 0', () => {
    expect(highestRank([0])).toBe(0);
  });
});
