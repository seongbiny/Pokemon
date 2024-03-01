import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PokemonCard from "../components/pokemonCard";
import "./home.css";

const Home = () => {
  const pokemonPerPage = 5;

  const [pokemonData, setPokemonData] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const observer = useRef<any>();

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const allPokemonData: any = [];
      for (let i = 1; i <= pokemonPerPage; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i + pokemonPerPage * page}`
        );
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${
            i + pokemonPerPage * page
          }`
        );
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        allPokemonData.push({
          ...response.data,
          korean_name: koreanName.name,
        });
      }
      setPokemonData((prevData: any) => [...prevData, ...allPokemonData]);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver(handleIntersection, options);

    if (observer.current) {
      observer.current.observe(document.getElementById("observer-element"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [pokemonData]);

  return (
    <div className="container">
      {pokemonData &&
        pokemonData.map((pokemon: any, idx: any) => (
          <PokemonCard
            key={idx}
            name={pokemon.korean_name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
          />
        ))}
      <div id="observer-element" style={{ height: "10px" }}></div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
