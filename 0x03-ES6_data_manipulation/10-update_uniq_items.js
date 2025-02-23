export default function updateUniqueItems(map) {
  for (const member of map) {
    if (member[1] === 1) map.set(member[0], 100);
  }
}
