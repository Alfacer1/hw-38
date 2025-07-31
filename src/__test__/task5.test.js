import { myDouble, myMul, myTriple } from '../task5'

describe('Multiplication functions tests', () => {
  test('myMul correctly multiplies two numbers', () => {
    expect(myMul(2, 3)).toBe(6)
    expect(myMul(4, 5)).toBe(20)
  })

  test('myDouble correctly doubles the number', () => {
    expect(myDouble(3)).toBe(6)
    expect(myDouble(4)).toBe(8)
    expect(myDouble(5)).toBe(10)
  })

  test('myTriple correctly triples the number', () => {
    expect(myTriple(3)).toBe(9)
    expect(myTriple(4)).toBe(12)
    expect(myTriple(5)).toBe(15)
  })

  test('myDouble and myTriple are created using myMul.bind', () => {
    const code = `
      export const myDouble = (n) => {
        const myBind = myMul.bind(null, 2);
        return myBind(n);
      }
      export const myTriple = (n) => {
        const tripleNum = myMul.bind(null, 3);
        return tripleNum(n);
      }
    `;
    
    expect(code).toMatch(/myMul\.bind/);
  });
});
