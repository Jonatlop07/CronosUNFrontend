import React, { useState } from "react";

import "./estilos/inicioDeSesion.scss";

const InicioDeSesion = (props) => {
  const [alias, setAlias] = useState("");
  const [clave, setClave] = useState("");

  const handleInputChange = (event) => {
    setAlias(event.target.value);
    setClave(event.target.value);
  };

  const iniciarSesion = async (event) => {
    event.preventDefault();
    const token = await fetch("http://localhost:8080/autenticacion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        alias: alias,
        clave: clave,
      }),
    }).then((respuesta) => respuesta.json());
    props.auth(token);
    console.log(props);
    console.log(token);
  };

  return (
    <div className="inicio-sesion">
      <p className="inicio-sesion-titulo"> CronosUN </p>
      <form
        className="inicio-sesion-formulario-entrada"
        onSubmit={iniciarSesion}
      >
        <input
          type="text"
          name="Alias"
          className="inicio-sesion-formulario-entrada"
          placeholder="Alias"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="clave"
          className="inicio-sesion-formulario-entrada"
          placeholder="Clave"
          onChange={handleInputChange}
        />

        <input
          type="submit"
          value="Iniciar sesion"
          className="inicio-sesion-formulario-boton-enviar"
        />
      </form>
      <p className="inicio-sesion-link">¿Olvisdaste tu contraseña? </p>
      <p className="inicio-sesion-link">¿No tienes cuenta?</p>
    </div>
  );
};

export default InicioDeSesion;
