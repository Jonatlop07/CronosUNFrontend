import React, { useState } from "react";

import BotonPagina from "./BotonPagina.js";

const seccionesDiario = [1, 2, 3, 4];

const ContenedorBotonesPaginas = (props) => {
   const actualizarNumeroPagina = (numeroPagina) => {
      actualizarNumeroPagina(numeroPagina);
   };

   const crearBotonesPagina = (numeroTotalPaginas) => {
      const botonesPagina = [];

      for (
         let numeroPagina = 1;
         numeroPagina <= numeroTotalPaginas;
         numeroPagina++
      ) {
         botonesPagina.push(
            <BotonPagina
               numeroPagina={numeroPagina}
               key={`btnSeccion${numeroPagina}`}
               seleccionarPagina={actualizarNumeroPagina}
               bloquearClick={numeroPagina === props.numeroPagina + 1}
            />
         );
      }

      return botonesPagina;
   };

   return (
      <div className="contenedor-botones-paginas">
         <center>{crearBotonesPagina(props.numeroTotalPaginas)}</center>
      </div>
   );
};

export default ContenedorBotonesPaginas;
