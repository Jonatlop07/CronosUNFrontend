import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { RUTA_INICIO, RUTA_INICIO_SESION } from "../../../utilidad/rutas.js";

import "./estilos/registro.scss";

const Registro = (props) => {
   const api = props.auth.api;

   const [datosUsuario, setDatosUsuario] = useState({
      nombre: "",
      apellido: "",
      alias: "",
      correo: "",
      clave: "",
   });

   const history = useHistory();

   const handleInputChange = (event) => {
      const { name, value } = event.currentTarget;
      setDatosUsuario((datosAnteriores) => ({
         ...datosAnteriores,
         [name]: value,
      }));
   };

   const registrarUsuario = async (event) => {
      event.preventDefault();

      const { nombre, apellido, alias, correo, clave } = datosUsuario;

      const respuesta = await api.registrarUsuario({
         nombre: `${nombre} ${apellido}`,
         correo,
         clave,
         alias,
         biografia: "Bienvenido ",
      });

      if (!respuesta.ok) {
      } else {
         const { jwttoken, usuario } = await api
            .autenticarUsuario(alias, clave)
            .then((respuesta) => respuesta.json());
         props.autenticar(jwttoken, usuario);
      }
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
                     value={datosUsuario.nombre}
                     name="nombre"
                     placeholder="Nombre"
                     onChange={handleInputChange}
                     autoFocus={true}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="text"
                     value={datosUsuario.apellido}
                     name="apellido"
                     placeholder="Apellido"
                     onChange={handleInputChange}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="text"
                     value={datosUsuario.alias}
                     name="alias"
                     placeholder="Alias"
                     onChange={handleInputChange}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="email"
                     value={datosUsuario.correo}
                     name="correo"
                     placeholder="Correo"
                     onChange={handleInputChange}
                  />
                  <br />
                  <input
                     className="seccion-registro-input"
                     type="password"
                     name="clave"
                     value={datosUsuario.clave}
                     placeholder="Clave"
                     onChange={handleInputChange}
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
