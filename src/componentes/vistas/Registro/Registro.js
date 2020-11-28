import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./estilos/registro.scss";
import { RUTA_INICIO_SESION } from "../../../utilidad/rutas.js";

const Registro = (props) => {
  const [nombre, setNombre] = useState();
  const [apellidos, setApellido] = useState();
  const [alias, setAlias] = useState();
  const [correo, setCorreo] = useState();
  const [clave, setClave] = useState();
  const handleInputChange = (event) => {
    setNombre(event.target.value);
    setApellido(event.target.value);
    setAlias(event.target.value);
    setCorreo(event.target.value);
    setClave(event.target.value);
  };

  const registrarUsuario = async (event) => {
    event.preventDefault();
    const id = await fetch("http://localhost:8080/registro", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre + apellidos,
        correo: correo,
        clave: clave,
        alias: alias,
        biografia: " Bienvenido ",
      }),
    }).then((respuesta) => respuesta.json());
    console.log(id);
  };
  return (
    <React.Fragment>
      <center>
        <div className="seccion-registro">
          <h1 className="seccion-registro-titulo">CronosUN</h1>
          <form className="general" onSubmit={registrarUsuario}>
            <input
              className="seccion-registro-input"
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleInputChange}
              autoFocus={true}
            />
            <br />
            <input
              className="seccion-registro-input"
              type="text"
              name="apellido"
              placeholder="apellido"
              onChange={handleInputChange}
            />
            <br />
            <input
              className="seccion-registro-input"
              type="text"
              name="Alias"
              placeholder="Alias"
              onChange={handleInputChange}
            />
            <br />
            <input
              className="seccion-registro-input"
              type="email"
              name="correo"
              placeholder="Correo"
              onChange={handleInputChange}
            />
            <br />
            <input
              className="seccion-registro-input"
              type="password"
              name="clave"
              placeholder="clave"
              onChange={handleInputChange}
            />
            <br />
            <input
              className="seccion-registro-boton"
              type="submit"
              value="Finalizar registro"
            />
            <br />
            <p className="seccion-registro-info">
              ¿Ya posees una cuenta?{" "}
              <Link
                className="seccion-registro-info-link"
                to={RUTA_INICIO_SESION}
              >
                Inicia sesión
              </Link>
            </p>
          </form>
        </div>
      </center>
    </React.Fragment>
  );
};

export default Registro;
