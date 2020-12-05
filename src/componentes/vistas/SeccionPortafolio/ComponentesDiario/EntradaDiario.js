import React, { useState } from "react";

import ModalEliminacionEntrada from "./ModalEliminacionEntrada.js";

const EntradaDiario = (props) => {
   const [eliminandoEntrada, setEliminandoEntrada] = useState(false);

   const eliminarEntrada = () => {
      props.eliminarEntrada(props.id);
      cancelarEliminacion();
   };

   const cancelarEliminacion = () => {
      setEliminandoEntrada(false);
   };

   return (
      <div className="entrada-diario">
         <div className="entrada-diario-barra">
            <div className="entrada-diario-barra-tiempo">
               {props.fecha}-{props.hora}
            </div>
            <div className="entrada-diario-barra-borrar">
               <i
                  className="entrada-diario-barra-borrar-btn fas fa-minus-circle"
                  onClick={() => setEliminandoEntrada(true)}
               ></i>
            </div>
         </div>

         {eliminandoEntrada && (
            <ModalEliminacionEntrada
               cancelarEliminacion={cancelarEliminacion}
               eliminarEntrada={eliminarEntrada}
            />
         )}
         <p className="entrada-diario-contenido">{props.contenido}</p>
      </div>
   );
};

export default EntradaDiario;
