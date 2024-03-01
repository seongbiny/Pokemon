import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PokemonCard from "../components/pokemonCard";
import "./home.css";
import { useDispatch } from "react-redux";
import { setPokemonData } from "../features/pokemonSlice";

const Home = () => {
  const pokemonPerPage = 5;

  const dispatch = useDispatch();

  const [pokemonList, setPokemonList] = useState<any>([]);
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
      setPokemonList((prevData: any) => [...prevData, ...allPokemonData]);
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
  }, [pokemonList]);

  const getPokemon = async (id: any) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const data = {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types.map((type: any) => type.type.name),
        image: response.data.sprites.front_default,
        koreanName: pokemonList[response.data.id - 1].korean_name,
        height: response.data.height,
        weight: response.data.weight,
        abilities: response.data.abilities.map(
          (ability: any) => ability.ability.name
        ),
      };
      dispatch(setPokemonData(data));
    } catch (error) {
      //
    } finally {
      //
    }
  };

  return (
    <div className="container">
      {pokemonList &&
        pokemonList.map((pokemon: any, idx: any) => (
          <div key={idx} onClick={() => getPokemon(pokemon.id)}>
            <PokemonCard
              name={pokemon.korean_name}
              id={pokemon.id}
              image={pokemon.sprites.front_default}
            />
          </div>
        ))}
      <div id="observer-element" style={{ height: "10px" }}></div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
