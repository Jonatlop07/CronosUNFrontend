import React, { useState } from "react";

import EntradaDiario from "./EntradaDiario.js";
import BotonResultadoEntradas from "../BotonResultadoEntradas.js";

import "./estilos/contenedorDiario.scss";

const seccionesDiario = [1, 2, 3, 4];

const ContenedorDiario = (props) => {
   const [numSeccionActual, setNumSeccionActual] = useState(1);

   const actualizarSeccionEntradas = (numeroSeccion) => {
      setNumSeccionActual(numeroSeccion);
   };

   return (
      <div>
         <div>
            <EntradaDiario
               fecha="10/10/2020"
               hora="15:15"
               texto="Hoy estuve probando mi texto"
            />

            <EntradaDiario
               fecha="10/10/2020"
               hora="15:15"
               texto="Hoy estuve probando mi texto"
            />
         </div>

         {seccionesDiario.map((numeroSeccion) => (
            <BotonResultadoEntradas
               numeroSeccion={numeroSeccion}
               key={`btnSeccion${numeroSeccion}`}
               seleccionarSeccion={actualizarSeccionEntradas}
               bloquearClick={numeroSeccion === numSeccionActual}
            ></BotonResultadoEntradas>
         ))}
      </div>
   );
};

export default ContenedorDiario;
