import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemons } from "../stores/actions/actionPokemons";

export default function Home() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => {
    console.log(state.pokemonsReducer.pokemons);
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPokemons()).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <PokemonCard />
    </div>
  );
}
