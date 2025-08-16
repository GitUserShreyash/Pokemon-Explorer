import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemonCard";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CardSkeleton } from "./CardsSkeleton";

export const Pockemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  const [pokemon, setPokemon] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [isLoading,setLoading] = useState(true)

  const fetchPokmon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedData = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedData);
      setPokemon(detailedResponses);
    } catch (error) {
      console.log("Error occured while fetching data from api...");
    }
  };
  useEffect(() => {
    fetchPokmon();
  }, []);
  console.log(pokemon);
  const filteredData =
    searchInput === ""
      ? pokemon
      : pokemon.filter((card) =>
          card.name?.toLowerCase().includes(searchInput.toLowerCase())
        );

  return (
    <><header className="header">
            <h1>
              Pokemon Explorer
            </h1>
            <input
              className="searchbar"
              type="text"
              placeholder="  Search Pokemon"
              onChange={(e) => setsearchInput(e.target.value)}
            ></input>
          </header>
      {pokemon.length!=0 ? (
        <div>
          
          <div className="Grid-Container">
            {filteredData.map((curPokemon) => (
              <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
            ))}
          </div>
        </div>
      ) : (
        <CardSkeleton cards={6}/>
      )}
    </>
  );
};

