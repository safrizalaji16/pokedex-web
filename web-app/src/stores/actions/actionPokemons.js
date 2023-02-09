import axios from "axios";
import Swal from "sweetalert2";

import { baseUrl, FETCH_POKEMONS } from "./actionType";

export const fetchSuccessPokemons = (data) => {
  return {
    type: FETCH_POKEMONS,
    data,
  };
};

export const fetchPokemons = (url) => {
  return async (dispatch) => {
    try {
      const fetchUrl = url || `${baseUrl}pokemon/?offset=0&limit=21`;
      const { data } = await axios.get(fetchUrl);

      dispatch(fetchSuccessPokemons(data.results));
      return data;
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: err.message,
      });
    }
  };
};

export const fetchOnePokemon = (url) => {
  return async () => {
    try {
      const { data } = await axios.get(`${url}`);

      return data;
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: err.message,
      });
    }
  };
};
