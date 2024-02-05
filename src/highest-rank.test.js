const highestRank = require('./highest-rank');

describe('Story1: small number in arr', () => {
  it('UAT1.1: When I pass [0] , then I should see the 0', () => {
    expect(highestRank([0])).toBe(0);
  });
  it('UAT1.2: When I pass [0, 1] , then I should see the 1', () => {
    expect(highestRank([0, 1])).toBe(1);
  });
});
