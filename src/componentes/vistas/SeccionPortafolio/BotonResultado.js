import React from "react";

const BotonResultadoEntradas = (props) => {
   const manejarClickBoton = (evento) => {
      props.seleccionarSeccion(props.numeroSeccion);
   };

   return (
      <button
         className={`boton-seleccionado ${
            !props.bloquearClick && "boton-resultado"
         }`}
         disabled={props.bloquearClick}
         onClick={manejarClickBoton}
      >
         {props.numeroSeccion}
      </button>
   );
};

export default BotonResultadoEntradas;
