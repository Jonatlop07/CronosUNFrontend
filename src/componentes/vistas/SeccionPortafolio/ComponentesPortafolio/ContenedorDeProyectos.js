import React, { useState } from "react";
import PropTypes from "prop-types";

import Proyecto from "./Proyecto.js";

const ContenedorDeProyectos = ({ proyectos }) => {
   return (
      <div className="contenedor-proyectos">
         <div className="contenedor-proyectos-principal">
            {proyectos.map((proyecto, indice) => (
               <Proyecto
                  key={`proy${indice}`}
                  titulo={proyecto.titulo}
                  descripcion={proyecto.descripcion}
                  imagenFondo={proyecto.imagenFondo}
                  esPrivado={proyecto.esPrivado}
                  estado={proyecto.estado}
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
