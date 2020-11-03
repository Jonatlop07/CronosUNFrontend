import React, { useState } from "react";

import "./estilos/recuperacionClave.scss";

const RecuperacionClave = (props) => {
   const [envioCorreo, setEnvioCorreo] = useState("");
   const handleInputChange = (event) => {
      setEnvioCorreo({
         ...envioCorreo,
         [event.target.name]: event.target.value,
      });
   };
   const enviarCorreo = (event) => {
      event.preventDefault();
      console.log(envioCorreo);
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
