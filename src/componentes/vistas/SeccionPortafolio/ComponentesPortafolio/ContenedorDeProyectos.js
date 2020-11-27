import React, { useState } from "react";
import PropTypes from "prop-types";

import Proyecto from "./Proyecto.js";

const ContenedorDeProyectos = ({ proyectos, actualizarProyecto }) => {
   return (
      <div className="contenedor-proyectos">
         <div className="contenedor-proyectos-principal">
            {proyectos.map((proyecto, indice) => (
               <Proyecto
                  key={`proy${indice}`}
                  datos={{
                     id: proyecto.id,
                     titulo: proyecto.titulo,
                     descripcion: proyecto.descripcion,
                     privacidad: proyecto.esPrivado,
                     estado: proyecto.estado,
                     categoria: proyecto.categoria,
                     fechaCreacion: proyecto.fechaCreacion,
                  }}
                  actualizarProyecto={actualizarProyecto}
               />
            ))}
         </div>
      </div>
   );
};

ContenedorDeProyectos.propTypes = {
   proyectos: PropTypes.array.isRequired,
};

ContenedorDeProyectos.defaultProps = {
   proyectos: [],
};

export default ContenedorDeProyectos;
