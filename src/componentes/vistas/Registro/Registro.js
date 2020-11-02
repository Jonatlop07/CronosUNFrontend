import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./estilos/registro.scss";
import { RUTA_INICIO_SESION } from "../../../utilidad/rutas.js";

const Registro = (props) => {
  const [nombre, setNombre] = useState();
  const [apellidos, setApellidos] = useState();
  const [nombreDeUsuario, setNombreDeUsuario] = useState();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();

  return (
    <React.Fragment>
      <center>
        <div className="seccion-registro">
          <h1 className="seccion-registro-titulo">CronosUN</h1>
          <form className="general">
            <input
              className="seccion-registro-input"
              type="text"
              placeholder="Nombre"
              value={nombre}
              autoFocus={true}
            />
            <br />
            <input
              className="seccion-registro-input" 
              type="text" 
              placeholder="Apellidos" 
              value={apellidos} 
            />
            <br />
            <input
              className="seccion-registro-input"
              type="text"
              placeholder="Nombre de usuario"
              value={nombreDeUsuario}
            />
            <br />
            <input 
              className="seccion-registro-input" 
              type="email" 
              placeholder="Correo" 
              value={correo} 
            />
            <br />
            <input
              className="seccion-registro-input"
              type="password"
              placeholder="Contraseña"
              value={contrasena}
            />
            <br />
            <input 
              className="seccion-registro-boton"
              type="submit" value="Finalizar registro" />
            <br />
            <p className="seccion-registro-info">
              ¿Ya posees una cuenta?{" "}
              <Link className="seccion-registro-info-link" to={RUTA_INICIO_SESION}>Inicia sesión</Link>
            </p>
          </form>
        </div>
      </center>
    </React.Fragment>
  );
};

export default Registro;
