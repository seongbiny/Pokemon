import React from "react";
import "./pokemonCard.css";

type PropsType = {
  id: number;
  image: string;
  name: string;
};

const PokemonCard = (props: PropsType) => {
  const { id, image, name } = props;

  return (
    <div key={id} className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h3 className="pokemon-name">{name}</h3>
      <p className="pokemon-type">ID: {id}</p>
    </div>
  );
};

export default PokemonCard;
