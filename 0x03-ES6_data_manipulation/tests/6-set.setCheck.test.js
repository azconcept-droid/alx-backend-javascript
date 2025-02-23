import setFromArray from "../6-set.js";

test("function returns a set", () => {
  const myset = setFromArray([0, 1, 1, 2, 3, 4, 4]);
  expect(myset instanceof Set).toBe(true);
});

test("Contains the boolean true, not false, and not null", () => {
  const obj = { abc: 'def'};
  const set = setFromArray([1, 2, 5, true, false, 'test', obj]);

  expect(set.has(true)).toBe(true);
  expect(set.has(false)).toBe(true);
  expect(set.has(null)).toBe(false);
});

test("Contains 'test' and not 'testsfda'", () => {
  const obj = { abc: 'def'};
  const set = setFromArray([1, 2, 5, true, false, 'test', obj]);

  expect(set.has('test')).toBe(true);
  expect(set.has('testsfda')).toBe(false);
});

test("setFromArray tests if a set contains certain ints", () => {
  const obj = { abc: 'def'};
  const set = setFromArray([1, 2, 5, true, false, 'test', obj]);

  expect(set.has(1)).toBe(true);
  expect(set.has(2)).toBe(true);
  expect(set.has(5)).toBe(true);
  expect(set.has(10)).toBe(false);
});

test("Checks if objects are in the set", () => {
  const obj = { abc: 'def'};
  const set = setFromArray([1, 2, 5, true, false, 'test', obj]);

  expect(set.has(obj)).toBe(true);
  expect(set.has({ abc: 'def'})).toBe(false);
});
