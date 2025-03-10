import cleanSet from "../8-clean_set.js";

test("returns the string test-chicken-user-id when id- is passed in", () => {
  const set = new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']);
  expect(cleanSet(set, 'id-')).toBe('test-chicken-user-id-');
});

test("returns jovi-aparte-apetit when bon is passed to a new set containing bonjovi, bonaparte, and bonappetit", () => {
  expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit']), 'bon')).toBe('jovi-aparte-appetit');
});

