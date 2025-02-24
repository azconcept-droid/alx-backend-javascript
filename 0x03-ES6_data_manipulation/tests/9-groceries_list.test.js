import groceriesList from "../9-groceries_list.js";

test("map has a key 'Apples' that maps to 10", () => {
  const map = groceriesList();
  expect(map.get('Apples')).toBe(10);
});

test("map has a key 'Banana' that maps to 5", () => {
  const map = groceriesList();
  expect(map.get('Banana')).toBe(5);
})

test("map has a key 'Rice' that maps to the value 1", () => {
  const map = groceriesList();
  expect(map.get('Rice')).toBe(1);
});


test("an instance of groceriesList is an instance of Map", () => {
  const map = groceriesList();
  expect(map instanceof Map).toBe(true);
});
