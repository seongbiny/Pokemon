import React from "react";
import "./pokemonCard.css";
import { useNavigate } from "react-router-dom";

const PokemonCard = (props: any) => {
  const { id, image, name } = props;
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div key={id} className="pokemon-card" onClick={onClickCard}>
      <img src={image} alt={name} className="pokemon-image" />
      <h3 className="pokemon-name">{name}</h3>
      <p className="pokemon-type">ID: {id}</p>
    </div>
  );
};

export default PokemonCard;
