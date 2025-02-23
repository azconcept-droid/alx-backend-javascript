export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  for (const member of map) {
    if (member[1] === 1) map.set(member[0], 100);
  }
}
