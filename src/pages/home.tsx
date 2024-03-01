import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/pokemonCard";
import "./home.css";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPokemonData: any = [];
      for (let i = 1; i <= 151; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        allPokemonData.push({ ...response.data, korean_name: koreanName.name });
      }
      setPokemonData(allPokemonData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {pokemonData.map((pokemon: any) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.korean_name}
          id={pokemon.id}
          image={pokemon.sprites.front_default}
        />
      ))}
    </div>
  );
};

export default Home;
