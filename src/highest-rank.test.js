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
  it('UAT1.7: When I pass [6,3,12,4,2] , then I should see the 12', () => {
    expect(highestRank([6, 3, 12, 4, 2])).toBe(12);
  });
});

describe('Story2: bigger arr', () => {
  it('UAT2.1: When I pass [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] , then I should see the 3', () => {
    expect(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])).toBe(3);
  });
});
