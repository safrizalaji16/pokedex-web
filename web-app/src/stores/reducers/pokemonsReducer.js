import { FETCH_POKEMONS } from "../actions/actionType";

const stateData = {
  pokemons: [],
};

export default function pokemonsReducer(state = stateData, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.data,
      };

    default:
      return state;
  }
}
