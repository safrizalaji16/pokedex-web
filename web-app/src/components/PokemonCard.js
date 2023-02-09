import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
import findPokemonType from "../helpers/findPokemonType";
import Detail from "../pages/Detail";
import { fetchOnePokemon } from "../stores/actions/actionPokemons";
import { TYPE_COLORS } from "../stores/actions/actionType";
import Preloader from "./Preloader";

export default function PokemonCard({ name, url }) {
  const dispatch = useDispatch();
  const [detailPokemon, setDetailPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchOnePokemon(url)).then((data) => {
      setDetailPokemon({
        id: data.id,
        name: data.name,
        base_exp: data.base_experience,
        height: data.height,
        weight: data.weight,
        types: findPokemonType(data.types),
        image_url: {
          svg_url:
            data.id < 650 ? `/svg/${data.id}.svg` : data.sprites.front_default,
          sprite: {
            front: data.sprites.front_default,
            back: data.sprites.back_default,
          },
        },
      });
      setLoading(false);
    });
  }, [dispatch, url]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 p-4 bg-red rounded-lg shadow-lg flex mx-auto md:w-full">
          <div className="my-auto w-1/2">
            <div className="font-bold mb-2 text-center">
              {capitalizeFirstLetter(name)}
            </div>
            {detailPokemon.types?.map((el, i) => {
              return (
                <div
                  className={
                    "flex justify-center items-center m-2 py-1 px-1 rounded-md text-white " +
                    TYPE_COLORS[el]
                  }
                  key={i}
                >
                  <p className="text-sm">{capitalizeFirstLetter(el)}</p>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Detail
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detailPokemon?.id}.png`}
              data={detailPokemon}
            />
          </div>
        </div>
      )}
    </>
  );
}
