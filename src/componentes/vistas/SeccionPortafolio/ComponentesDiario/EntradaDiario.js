import React, { useState } from "react";

import ModalEliminacionEntrada from "./ModalEliminacionEntrada.js";

import "./estilos/entradaDiario.scss";

const EntradaDiario = (props) => {
   const [eliminandoEntrada, setEliminandoEntrada] = useState(false);

   const ejecutarConfirmacionDeEliminacion = () => {
      setEliminandoEntrada(true);
   };

   const eliminarEntrada = () => {
      props.eliminarEntrada(props.key);
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
                  onClick={ejecutarConfirmacionDeEliminacion}
               ></i>
            </div>
         </div>

         {eliminandoEntrada && (
            <ModalEliminacionEntrada
               cancelarEliminacion={cancelarEliminacion}
               eliminarEntrada={eliminarEntrada}
            />
         )}

         <p className="entrada-diario-contenido">{props.texto}</p>
      </div>
   );
};

export default EntradaDiario;
