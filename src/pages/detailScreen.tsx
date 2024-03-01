import React from "react";
import "./detailScreen.css";
import { useParams } from "react-router-dom";

const DetailScreen = () => {
  const { pokemonId } = useParams();
  return (
    <div>
      <div>{pokemonId}</div>
    </div>
  );
};

export default DetailScreen;
