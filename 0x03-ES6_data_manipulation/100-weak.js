export const weakMap = new WeakMap();

const count = {};

weakMap.set(count, 0);

export function queryAPI(endpoint) {
  weakMap.set(count, weakMap.get(count) + 1);

  weakMap.set(endpoint, weakMap.get(count));

  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}
