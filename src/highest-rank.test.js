const highestRank = require('./highest-rank');

describe('Story1: small number in arr', () => {
  it('UAT1.1: When I pass [0] , then I should see the 0', () => {
    expect(highestRank([0])).toBe(0);
  });
  it('UAT1.2: When I pass [0,1] , then I should see the 1', () => {
    expect(highestRank([0, 1])).toBe(1);
  });
  it('UAT1.3: When I pass [0,0,1] , then I should see the 0', () => {
    expect(highestRank([0, 0, 1])).toBe(0);
  });
  it('UAT1.4: When I pass [0,0,1,1] , then I should see the 1', () => {
    expect(highestRank([0, 0, 1, 1])).toBe(1);
  });
  it('UAT1.5: When I pass [0,1,2] , then I should see the 2', () => {
    expect(highestRank([0, 1, 2])).toBe(2);
  });
  it('UAT1.6: When I pass [0,0,1,2] , then I should see the 0', () => {
    expect(highestRank([0, 0, 1, 2])).toBe(0);
  });
});
