import React, { useState } from "react";

import "./estilos/registro.scss";

const Registro = (props) => {
  const [nombre, setNombre] = useState();
  const [apellidos, setApellidos] = useState();
  const [nombreDeUsuario, setNombreDeUsuario] = useState();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();

  return (
    <React.Fragment>
      <center>
        <h1>CronosUN</h1>
        <form>
          <input type="text" placeholder="Nombre" value = {nombre} autoFocus={true}/>
          <br />
          <input type="text" placeholder="Apellidos" value = {apellidos}/>
          <br />
          <input type="text" placeholder="Nombre de usuario" value = {nombreDeUsuario}/>
          <br />
          <input type="email" placeholder="Correo" value = {correo}/>
          <br />
          <input type="password" placeholder="Contraseña" value = {contrasena}/>
          <br />
          <input type="submit" value="Finalizar registro"/>
          <br />
          <p>¿Ya posees una cuenta? <a>Inicia sesión</a></p>
        </form>
      </center>
    </React.Fragment>
  );
};

export default Registro;
