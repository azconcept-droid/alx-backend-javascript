export const weakMap = new WeakMap();

const count = {};

weakMap.set(count, 0);

export function queryAPI(endpoint) {
  if (weakMap.get(count) >= 5) throw new Error('Endpoint load is high');

  weakMap.set(count, weakMap.get(count) + 1);

  weakMap.set(endpoint, weakMap.get(count));
}
