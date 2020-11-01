import React from "react";

import "./estilos/inicioDeSesion.scss";

const InicioDeSesion = (props) => {
  return (
    <div className="inicio-sesion">
      <p className="inicio-sesion-titulo"> CronosUN </p>
      <form>
        <input
          type="text"
          name="Correo"
          className="inicio-sesion-entrada"
          placeholder="Correo"
        />

        <input
          type="text"
          name="clave"
          className="inicio-sesion-entrada"
          placeholder="Contraseña"
        />

        <input
          type="submit"
          value="Iniciar sesion"
          className="inicio-sesion-boton-enviar"
        />
      </form>
      <p className="inicio-sesion-link">¿Olvisdaste tu contraseña? </p>
      <p className="inicio-sesion-link">¿No tienes cuenta?</p>
    </div>
  );
};

export default InicioDeSesion;
