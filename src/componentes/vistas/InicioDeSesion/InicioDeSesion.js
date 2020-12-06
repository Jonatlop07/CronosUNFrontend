import React, { useState } from "react";

import "./estilos/inicioDeSesion.scss";

const InicioDeSesion = (props) => {
   const [alias, setAlias] = useState("");
   const [clave, setClave] = useState("");

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
      props.auth(credenciales.jwttoken);
      props.idUsuario(credenciales.idUsuario);
      console.log(props);
      console.log(credenciales);
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
         <p className="inicio-sesion-link">¿Olvidaste tu contraseña? </p>
         <p className="inicio-sesion-link">¿No tienes cuenta?</p>
      </div>
   );
};

export default InicioDeSesion;
