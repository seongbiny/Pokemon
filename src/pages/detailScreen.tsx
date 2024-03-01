import React from "react";
import "./detailScreen.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const DetailScreen = () => {
  const pokemonData = useSelector((state: RootState) => state.pokemon.data);

  return (
    <div className="pokemon-detail">
      <img src={pokemonData.image} alt={pokemonData.name} />
      <h2>
        {pokemonData.name} {pokemonData.koreanName}
      </h2>
      <div className="pokemon-detail-info">
        <div className="pokemon-detail-info-item">
          <span className="pokemon-detail-info-label">Type:</span>
          <span className="pokemon-detail-info-value">
            {pokemonData.types && pokemonData.types.join(", ")}
          </span>
        </div>

        <div className="pokemon-detail-info-item">
          <span className="pokemon-detail-info-label">Abilities:</span>
          <span className="pokemon-detail-info-value">
            {pokemonData.abilities && pokemonData.abilities.join(", ")}
          </span>
        </div>

        <div className="pokemon-detail-info-item">
          <span className="pokemon-detail-info-label">Height:</span>
          <span className="pokemon-detail-info-value">
            {pokemonData.height}
          </span>
        </div>

        <div className="pokemon-detail-info-item">
          <span className="pokemon-detail-info-label">Weight:</span>
          <span className="pokemon-detail-info-value">
            {pokemonData.weight}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
