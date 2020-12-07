import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
   RUTA_INICIO,
   RUTA_REC_CLAVE,
   RUTA_REGISTRO,
} from "../../../utilidad/rutas";

import "./estilos/inicioDeSesion.scss";

const InicioDeSesion = (props) => {
   const [alias, setAlias] = useState("");
   const [clave, setClave] = useState("");

   const history = useHistory();

   const handleInputChangeCorreo = (event) => {
      setAlias(event.target.value);
   };
   const handleInputChangeClave = (event) => {
      setClave(event.target.value);
   };

   const iniciarSesion = async (event) => {
      event.preventDefault();
      const credenciales = await fetch("http://localhost:8080/autenticacion", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify({
            alias: alias,
            clave: clave,
         }),
      }).then((respuesta) => respuesta.json());
      console.log(credenciales.jwttoken);
      props.auth(credenciales.jwttoken);
      props.idUsuario(credenciales.idUsuario);
      history.push(RUTA_INICIO);
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
               name="alias"
               className="inicio-sesion-formulario-entrada"
               placeholder="Alias"
               onChange={handleInputChangeCorreo}
            />

            <input
               type="text"
               name="clave"
               className="inicio-sesion-formulario-entrada"
               placeholder="Clave"
               onChange={handleInputChangeClave}
            />

            <input
               type="submit"
               value="Iniciar sesion"
               className="inicio-sesion-formulario-boton-enviar"
            />
         </form>
         <Link className="inicio-sesion-link" to={RUTA_REC_CLAVE}>
            ¿Olvidaste tu contraseña?{" "}
         </Link>
         <Link className="inicio-sesion-link" to={RUTA_REGISTRO}>
            ¿No tienes una cuenta? Regístrate
         </Link>
      </div>
   );
};

export default InicioDeSesion;
