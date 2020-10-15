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
   };

   const cancelarEliminacion = () => {
      setEliminandoEntrada(false);
   };

   return (
      <div>
         <p>
            {props.fecha}-{props.hora}
         </p>
         <button onClick={ejecutarConfirmacionDeEliminacion}>Borrar</button>
         <p>{props.texto}</p>

         {eliminandoEntrada && (
            <ModalEliminacionEntrada
               cancelarEliminacion={cancelarEliminacion}
               eliminarEntrada={eliminarEntrada}
            />
         )}
      </div>
   );
};

export default EntradaDiario;
