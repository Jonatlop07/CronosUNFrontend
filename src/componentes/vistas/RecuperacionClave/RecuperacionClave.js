import React, { useState } from "react";
import "./estilos/recuperacionClave.scss";

const RecuperacionClave = (props) => {
   const api = props.auth.api;

   const [envioCorreo, setEnvioCorreo] = useState("");

   const handleInputChange = (event) => {
      setEnvioCorreo(event.currentTarget.value);
   };

   const enviarCorreo = async (event) => {
      event.preventDefault();
      event.currentTarget.reset();
      const respuesta = await api.enviarCorreoRecuperacion(envioCorreo);

      if (!respuesta.status === 204) {
      } else {
      }
   };

   return (
      <div className="recuperacion-clave">
         <h1 className="recuperacion-clave-titulo">CronosUN</h1>
         <p className="recuperacion-clave-etiqueta">
            Ingrese su correo para validar el cambio de contraseña:
         </p>
         <form onSubmit={enviarCorreo}>
            <input
               type="text"
               name="Correo"
               className="recuperacion-clave-entrada"
               placeholder="Correo de recuperación"
               onChange={handleInputChange}
            />
            <input
               type="submit"
               value="Enviar"
               className="recuperacion-clave-boton-enviar"
            />
         </form>
      </div>
   );
};

export default RecuperacionClave;
