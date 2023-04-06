describe('calculate monthly rate correctly', () => {
  it('should calculate the monthly rate correctly with interest', () => {
    expect(calculateMonthlyPayment({ amount: 1000, years: 2, rate: 2 })).toEqual('42.54');
  });
  it('should calculate the monthly rate correctly with no interest', () => {
    expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0 })).toEqual('833.33');
  });
});

it('should return a result with a number that has 2 decimal places', () => {
  expect(calculateMonthlyPayment({ amount: 1000, years: 2, rate: 2 }).slice(-3, -2)).toBe('.');
});

/// etc
