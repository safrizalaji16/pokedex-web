import { useEffect, useState } from "react";
import { Button } from "react-daisyui";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import Preloader from "../components/Preloader";
import { fetchPokemons } from "../stores/actions/actionPokemons";

export default function Home() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonsReducer.pokemons);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  function getNext() {
    setLoading(true);
    dispatch(fetchPokemons(next)).then((result) => {
      setLoading(false);
      setNext(result.next);
      setPrevious(result.previous);
    });
  }
  function getPrevious() {
    setLoading(true);
    dispatch(fetchPokemons(previous)).then((result) => {
      setLoading(false);
      setNext(result.next);
      setPrevious(result.previous);
    });
  }

  useEffect(() => {
    dispatch(fetchPokemons()).then((result) => {
      setLoading(false);
      setNext(result.next);
      setPrevious(result.previous);
    });
  }, [dispatch]);

  return (
    <div className="md:container md:mx-auto ">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
            {pokemon?.map((el) => {
              return <PokemonCard key={el.url} name={el.name} url={el.url} />;
            })}
          </div>
          <div className="flex  justify-center items-center">
            {previous && (
              <Button className="m-2" onClick={getPrevious}>
                Previous
              </Button>
            )}
            {next && (
              <Button className="m-2" onClick={getNext}>
                Next
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
