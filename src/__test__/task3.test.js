import { myPow } from '../task3'

describe('myPow function tests', () => {
  const myPrint = (a, b, res) => `${a}^${b}=${res}`;

  test('myPow calculates power correctly and returns expected string for 3^4', () => {
    expect(myPow(3, 4, myPrint)).toBe('3^4=81');
  });

  test('myPow calculates power correctly and returns expected string for 2^3', () => {
    expect(myPow(2, 3, myPrint)).toBe('2^3=8');
  });

  test('myPow calculates power correctly and returns expected string for 5^0', () => {
    expect(myPow(5, 0, myPrint)).toBe('5^0=1');
  });

  test('myPow calculates power correctly and returns expected string for 2^1', () => {
    expect(myPow(2, 1, myPrint)).toBe('2^1=2');
  });

  test('myPow handles negative exponents correctly for 2^-2', () => {
    expect(myPow(2, -2, myPrint)).toBe('2^-2=0.25');
  });
});
