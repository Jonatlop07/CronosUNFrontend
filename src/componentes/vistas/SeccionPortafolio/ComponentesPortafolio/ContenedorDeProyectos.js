import React, { useState } from "react";

import Proyecto from "./Proyecto.js";
import BotonResultadoEntradas from "../BotonResultadoEntradas.js";

import "./estilos/contenedorDeProyectos.scss";

const seccionesPortafolio = [1, 2, 3, 4];

const ContenedorDeProyectos = (props) => {
   const [numSeccionActual, setNumSeccionActual] = useState(1);

   const actualizarSeccionProyectos = (numeroSeccion) => {
      setNumSeccionActual(numeroSeccion);
   };

   return (
      <div>
         <div>
            <Proyecto />
            <Proyecto />
         </div>

         {seccionesPortafolio.map((numeroSeccion) => (
            <BotonResultadoEntradas
               numeroSeccion={numeroSeccion}
               key={`btnSeccion${numeroSeccion}`}
               seleccionarSeccion={actualizarSeccionProyectos}
               bloquearClick={numeroSeccion === numSeccionActual}
            ></BotonResultadoEntradas>
         ))}
      </div>
   );
};

export default ContenedorDeProyectos;
