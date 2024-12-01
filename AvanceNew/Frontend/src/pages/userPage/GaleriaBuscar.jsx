import React, { useState, useEffect } from "react";
import Header from "../../Components/layout/Header";
import "../../styles/userStyles/GaleriaBuscar.css";
import PetCard from "../../Components/User/petCard/PetCard";

const GaleriaBuscar = () => {
    const [pets, setPets] = useState([]);
  
    useEffect(() => {
      // Cargamos las mascotas desde el localStorage
      const storedPets = JSON.parse(localStorage.getItem("pets")) || [];
      setPets(storedPets);
    }, []);
  
    return (
      <>
        <Header />
        <div className="gallery-container">
          <h2 className="gallery-title">Ellos buscan volver a casa</h2>
          <div className="gallery-grid">
            {pets.length > 0 ? (
              pets.map((pet, index) => (
                <PetCard
                  key={index} // Usamos el índice porque no hay un ID único
                  name={pet.name}
                  size={pet.size}
                  gender={pet.gender}
                  image={pet.image}
                />
              ))
            ) : (
              <p>No hay mascotas disponibles en este momento.</p>
            )}
          </div>
        </div>
      </>
    );
  };  

export default GaleriaBuscar;
