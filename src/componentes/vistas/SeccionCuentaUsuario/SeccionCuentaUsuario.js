import React, { useState, useEffect } from "react";

import ImagenCuentaPorDefecto from "./Default.svg.png";
import "./estilos/seccionCuentaUsuario.scss";

const SeccionCuentaUsuario = (props) => {
   const usuario = props.auth.usuario;
   const api = props.auth.api;

   const [informacionUsuario, setInformacionUsuario] = useState({
      nombre: "",
      alias: "",
      correo: "",
      clave: "",
      biografia: "",
   });

   const obtenerInformacion = async () => {
      const respuesta = await api.obtenerInformacionUsuario(usuario.id);

      if (respuesta.ok) {
         const nuevaInformacionUsuario = await respuesta.json();
         setInformacionUsuario(nuevaInformacionUsuario);
      } else {
      }
   };

   const handleInputChange = (event) => {
      const { name, value } = event.currentTarget;

      setInformacionUsuario((anteriorInformacionUsuario) => ({
         ...anteriorInformacionUsuario,
         [name]: value,
      }));
   };

   const modificarUsuario = async (event) => {
      event.preventDefault();
      const respuesta = await api.modificarInformacionUsuario(
         informacionUsuario
      );

      if (respuesta.ok) {
      } else {
      }
   };

   const eliminarUsuario = async (event) => {
      event.preventDefault();
      const respuesta = await api.eliminarCuentaUsuario(usuario.id);

      if (respuesta.ok) {
         props.cerrarSesion();
      } else {
      }
   };

   useEffect(() => {
      obtenerInformacion();
   }, []);

   return (
      <div>
         <div className="contenedor">
            <div className="vista">
               <div className="vista-cuenta">
                  <img
                     className="vista-cuenta-imagen"
                     src={ImagenCuentaPorDefecto}
                  />
                  <p className="vista-cuenta-nombreUsuario">
                     {informacionUsuario.nombre}
                  </p>
                  <button className="vista-cuenta-boton" type="submit">
                     Actualizar Imagen
                  </button>
               </div>
            </div>

            <form className="editar-cuenta" onSubmit={modificarUsuario}>
               <div className="editar-cuenta-contenedor">
                  <div className="editar-cuenta-contenedor-etiqueta">
                     <label className="editar-cuenta-contenedor-etiqueta-nombre">
                        Nombre
                     </label>
                     <label className="editar-cuenta-contenedor-etiqueta-nombre">
                        Nombre de Usuario
                     </label>
                     <label className="editar-cuenta-contenedor-etiqueta-nombre">
                        Correo
                     </label>
                     <label className="editar-cuenta-contenedor-etiqueta-nombre">
                        Contraseña
                     </label>
                     <label className="editar-cuenta-contenedor-etiqueta-nombre">
                        Biografia
                     </label>
                  </div>
                  <div className="editar-cuenta-contenedor-parametro">
                     <input
                        onChange={handleInputChange}
                        type="text"
                        name="nombre"
                        value={informacionUsuario.nombre}
                        className="editar-cuenta-contenedor-parametro-entrada"
                     ></input>
                     <input
                        onChange={handleInputChange}
                        type="text"
                        name="alias"
                        value={informacionUsuario.alias}
                        className="editar-cuenta-contenedor-parametro-entrada"
                     />
                     <input
                        onChange={handleInputChange}
                        type="text"
                        name="correo"
                        value={informacionUsuario.correo}
                        className="editar-cuenta-contenedor-parametro-entrada"
                     />
                     <input
                        onChange={handleInputChange}
                        type="text"
                        name="clave"
                        value={informacionUsuario.clave}
                        className="editar-cuenta-contenedor-parametro-entrada"
                     />
                     <input
                        onChange={handleInputChange}
                        type="text"
                        name="biografia"
                        value={informacionUsuario.biografia}
                        className="editar-cuenta-contenedor-parametro-entrada"
                     />
                  </div>
               </div>
               <input
                  type="submit"
                  value="Guardar"
                  className="editar-cuenta-boton-enviar"
               />
            </form>
         </div>
         <div className="eliminar-perfil">
            <button
               onClick={eliminarUsuario}
               className="eliminar-perfil-boton"
               type="submit"
            >
               Eliminar Perfil
            </button>
         </div>
      </div>
   );
};

export default SeccionCuentaUsuario;
