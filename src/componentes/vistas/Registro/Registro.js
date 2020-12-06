import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { RUTA_INICIO, RUTA_INICIO_SESION } from "../../../utilidad/rutas.js";

import "./estilos/registro.scss";

const Registro = (props) => {
   const [nombre, setNombre] = useState();
   const [apellido, setApellido] = useState();
   const [alias, setAlias] = useState();
   const [correo, setCorreo] = useState();
   const [clave, setClave] = useState();

   const history = useHistory();

   const handleInputChangeNombre = (event) => {
      setNombre(event.target.value);
   };
   const handleInputChangeApellido = (event) => {
      setApellido(event.target.value);
   };
   const handleInputChangeAlias = (event) => {
      setAlias(event.target.value);
   };
   const handleInputChangeCorreo = (event) => {
      setCorreo(event.target.value);
   };
   const handleInputChangeClave = (event) => {
      setClave(event.target.value);
   };
   const iniciarSesion = async () => {
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
      history.push(RUTA_INICIO);
   };

   const registrarUsuario = async (event) => {
      event.preventDefault();
      const id = await fetch("http://localhost:8080/registro", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            nombre: nombre + apellido,
            correo: correo,
            clave: clave,
            alias: alias,
            biografia: " Bienvenido ",
         }),
      }).then((respuesta) => respuesta.json());
      console.log(id);
      iniciarSesion();
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
                     onChange={handleInputChangeNombre}
                     autoFocus={true}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="text"
                     name="apellido"
                     placeholder="apellido"
                     onChange={handleInputChangeApellido}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="text"
                     name="alias"
                     placeholder="Alias"
                     onChange={handleInputChangeAlias}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="email"
                     name="correo"
                     placeholder="Correo"
                     onChange={handleInputChangeCorreo}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="password"
                     name="clave"
                     placeholder="clave"
                     onChange={handleInputChangeClave}
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
