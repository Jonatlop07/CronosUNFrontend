import React, { useState } from "react";
import ContenedorGrupo from "./ContenedorGrupo";
import "./estilos/contenedorAsignaturas.scss";

const ContenedorMateria = (props) => {
   const agregarAsignatura = (grupo) => {
      props.agregarAsignatura(props.materia.nombre, grupo);
   };
   const desagregarAsignatura = (grupo) => {
      props.desagregarAsignatura(props.materia.nombre, grupo);
   };
   return (
      <div className="contenedor-asignaturas-materia">
         <h5 className="contenedor-asignaturas-materia-nombre">
            {props.materia.nombre}
         </h5>
         {props.materia.grupos.map((grupo, indice) => (
            <ContenedorGrupo
               key={`contGrupo${indice}`}
               grupo={grupo}
               agregarAsignatura={agregarAsignatura}
               desagregarAsignatura={desagregarAsignatura}
            />
         ))}
      </div>
   );
};

export default ContenedorMateria;
