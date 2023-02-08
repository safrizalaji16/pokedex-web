import axios from "axios";
import Swal from "sweetalert2";

import { baseUrl, FETCH_POKEMONS } from "./actionType";

export const fetchSuccessPokemons = (data) => {
  return {
    type: FETCH_POKEMONS,
    data,
  };
};

export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${baseUrl}pokemon`);

      dispatch(fetchSuccessPokemons(data.results));
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: err.message,
      });
    }
  };
};
