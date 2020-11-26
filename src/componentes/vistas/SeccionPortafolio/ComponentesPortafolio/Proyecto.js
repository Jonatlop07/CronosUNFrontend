import React, { useState } from "react";

const Proyecto = (informacion) => {
   const consultarProyecto = () => {};

   const editarProyecto = () => {};

   const cambiarEstado = async () => {
      const RUTA_RECURSO = `https://localhost:8080/proyectos/${informacion.id}`;
      const configuracion = {};
      fetch(RUTA_RECURSO);
   };

   const cambiarPrivacidad = async () => {
      const RUTA_RECURSO = `https://localhost:8080/proyectos/${informacion.id}`;
      const configuracion = {};
      const respuesta = await fetch(RUTA_RECURSO);
   };

   return (
      <section className="proyecto">
         <h5 className="proyecto-titulo" onClick={consultarProyecto}>
            {informacion.titulo}
         </h5>
         <p className="proyecto-descripcion">{informacion.descripcion}</p>
         <figure
            className="proyecto-imagen"
            style={{ backgroundImage: `url(${informacion.imagenFondo})` }}
         >
            <img />
         </figure>
         <div className="proyecto-opciones">
            <i
               className="proyecto-opciones-editar fad fa-edit"
               onClick={editarProyecto}
            ></i>
            <select
               className="proyecto-opciones-estado"
               value={informacion.estado}
               onChange={cambiarEstado}
            >
               <option value="Finalizado">Finalizado</option>
               <option value="En progreso">En progreso</option>
               <option value="Incompleto">Incompleto</option>
            </select>

            <label className="proyecto-opciones-privacidad">
               <input
                  className="proyecto-opciones-privacidad-caja-seleccion"
                  type="checkbox"
                  onChange={cambiarPrivacidad}
                  defaultChecked={informacion.esPrivado}
               />
               <span className="proyecto-opciones-privacidad-deslizador"></span>
               <label className="proyecto-opciones-privacidad-etiqueta">
                  {informacion.esPrivado ? "Privado" : "Público"}
               </label>
            </label>
         </div>
      </section>
   );
};

export default Proyecto;
