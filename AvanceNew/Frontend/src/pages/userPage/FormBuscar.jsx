import React, { useState } from "react";
import Header from "../../Components/layout/Header";
import "../../styles/userStyles/FormBuscar.css";
import petImg from '../../assets/Buscar-petHolder.png';


const FormBuscar = () => {
  const [fotoMascota, setFotoMascota] = useState(petImg); //petImg como valor inicial

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader(); //funcion convierte a cadena Base64
      reader.onload = () => { //onload obtiene el resultado del lector y actualiza el estado con la imagen en Base64
        setFotoMascota(reader.result); // Base64 de la imagen
      };
      reader.readAsDataURL(file); // Convierte la imagen a Base64
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Recopila los datos del formulario
    const petData = {
      image: fotoMascota,
      date: event.target.elements["last-seen-date"].value,
      location: event.target.elements["last-seen-location"].value,
      phone: event.target.elements["phone"].value,
      email: event.target.elements["email"].value,
      name: event.target.elements["pet-name"].value,
      gender: event.target.elements["gender"].value,
      size: event.target.elements["size"].value,
      breed: event.target.elements["breed"].value,
      collar: event.target.elements["collar"].value,
      physicalTraits: event.target.elements["appearance"].value,
      disabilities: event.target.elements["disability"].value,
    };

    // Obtenemos las mascotas actuales del localStorage
    const storedPets = JSON.parse(localStorage.getItem("pets")) || [];
    storedPets.push(petData);
    // Guardamos en el localStorage
    localStorage.setItem("pets", JSON.stringify(storedPets));

    alert("Mascota agregada correctamente.");
  };


  return (
    <>
      <Header />
      <main className="buscar-amigo">
        <h2>¿QUIERES ENCONTRAR A TU AMIGO?</h2>
        <p>Primero Regístrate o Inicia Sesión</p>

        <div className="foto-mascota">
          <label htmlFor="foto">
            {/* fotomascota contiene la cadena Base64 y se usa en el atributo src de img */}
            <img src={fotoMascota} alt="Mascota" /> 
          </label>
          <input
            id="foto"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            />
        </div>

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="campo">
            <label>Visto por última vez:</label>
            <input type="date" name="last-seen-date" required />
          </div>

          <div className="campo">
            <label>Lugar donde fue última vez visto:</label>
            <input type="text" name="last-seen-location" placeholder="Lugar" required />
          </div>

          <div className="campo">
            <label>Teléfono para contactarte:</label>
            <input type="tel" name="phone" placeholder="Enter telephone number" />
          </div>

          <div className="campo">
            <label>Correo para contactarte:</label>
            <input type="email" name="email" placeholder="Enter email" />
          </div>

          <div className="campo">
            <label>Nombre de tu mascota:</label>
            <input type="text" name="pet-name" placeholder="Name" required />
          </div>

          <div className="campo-opciones">
            <label>Género:</label>
            <select name="gender" required>
              <option>Seleccionar</option>
              <option>Macho</option>
              <option>Hembra</option>
            </select>

            <label>Tamaño:</label>
            <select name="size" required>
              <option>Seleccionar</option>
              <option>Pequeño</option>
              <option>Mediano</option>
              <option>Grande</option>
            </select>
            
            <label>Raza:</label>
            <input type="text" name="breed" placeholder="Escribe la raza" />

            <label>¿Collar?</label>
            <select name="collar" required>
              <option>Seleccionar</option>
              <option>Sí</option>
              <option>No</option>
            </select>
          </div>

          <div className="campo">
            <label>Características físicas:</label>
            <textarea name="appearance" placeholder="Apariencia física"></textarea>
          </div>

          <div className="campo">
            <label>Discapacidades físicas de tu mascota:</label>
            <textarea name="disability" placeholder="Discapacidades"></textarea>
          </div>

          <button type="submit">Iniciar Búsqueda</button>
        </form>
      </main>
    </>
  );
};

export default FormBuscar;
