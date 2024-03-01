import React from "react";

const PokemonCard = (props: any) => {
  const { id, image, name } = props;
  return (
    <div key={id}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default PokemonCard;
