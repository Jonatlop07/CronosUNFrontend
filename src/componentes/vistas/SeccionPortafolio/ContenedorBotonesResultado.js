import React, { useState } from "react";

import BotonResultado from "./BotonResultado.js";

const seccionesDiario = [1, 2, 3, 4];

const ContenedorBotonesResultado = (props) => {
   const [seccionSeleccionada, setSeccionSeleccionada] = useState(1);

   const actualizarSeccionEntradas = (numSeccion) => {
      console.log(seccionSeleccionada);
      if (numSeccion !== seccionSeleccionada) {
         setSeccionSeleccionada(numSeccion);
      }
   };

   return (
      <div className="contenedor-botones-resultado">
         <center>
            {seccionesDiario.map((numeroSeccion) => (
               <BotonResultado
                  numeroSeccion={numeroSeccion}
                  key={`btnSeccion${numeroSeccion}`}
                  seleccionarSeccion={actualizarSeccionEntradas}
                  bloquearClick={numeroSeccion === seccionSeleccionada}
               ></BotonResultado>
            ))}
         </center>
      </div>
   );
};

export default ContenedorBotonesResultado;
