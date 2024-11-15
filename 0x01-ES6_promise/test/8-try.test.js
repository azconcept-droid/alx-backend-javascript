import divideFunction from '../8-try';

test("divideFunction gets the correct result", () => {
    expect(divideFunction(10, 1)).toBe(10);
});

test("divideFunction throw an error", () => {
  expect(() => {
    divideFunction(10, 0);
  }).toThrowError('cannot divide by 0');
});
