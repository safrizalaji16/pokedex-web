export default function findPokemonType(types) {
  const types_arr = [];

  types.map((type) => types_arr.push(type.type.name));

  return types_arr;
}
