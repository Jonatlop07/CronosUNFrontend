import React, { useState } from "react";

import EntradaDiario from "./EntradaDiario.js";

const ContenedorDiario = (props) => {
   const eliminarEntrada = (idEntrada) => {
      /*Código para eliminar la entrada*/
   };

   return (
      <div className="contenedor-diario">
         <EntradaDiario
            key="e1"
            fecha="10/10/2020"
            hora="15:15"
            texto="Hoy estuve probando mi texto. Hoy estuve probando mi texto. Hoy estuve probando mi texto. Hoy estuve probando mi texto"
            eliminarEntrada={eliminarEntrada}
         />

         <EntradaDiario
            key="e2"
            fecha="10/10/2020"
            hora="15:15"
            texto="Hoy estuve probando mi texto"
            eliminarEntrada={eliminarEntrada}
         />
      </div>
   );
};

export default ContenedorDiario;
