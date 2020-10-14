import React from "react";

import "./estilos/registro.scss";

const Registro = (props) => {
  return (
    <React.Fragment>
      <center>
        <h1>CronosUN</h1>
        <form>
          <input type="text" placeholder="Nombre"/>
          <br />
          <input type="text" placeholder="Apellidos"/>
          <br />
          <input type="text" placeholder="Nombre de usuario"/>
          <br />
          <input type="text" placeholder="Correo"/>
          <br />
          <input type="password" placeholder="Contraseña"/>
          <br />
          <input type="submit" value="Finalizar registro" />
        </form>
      </center>
    </React.Fragment>
  );
};

export default Registro;
