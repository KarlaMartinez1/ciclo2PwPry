import React from "react";
import "./PetCard.css";

const PetCard = ({ name, size, gender, image }) => {
  return (
    <div className="pet-card">
      <img src={image} alt={`Foto de ${name}`} className="pet-card__image" />
      <div className="pet-card__info">
        <h3 className="pet-card__name">{name}</h3>
        <p>Tamaño: {size}</p>
        <p>Género: {gender}</p>
      </div>
    </div>
  );
};

export default PetCard;
