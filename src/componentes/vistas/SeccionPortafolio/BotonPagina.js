import React from "react";

const BotonPagina = (props) => {
   const manejarClickBoton = () => {
      props.seleccionarPagina(props.numeroPagina);
   };

   return (
      <button
         className={`boton-seleccionado ${
            !props.bloquearClick && "boton-resultado"
         }`}
         disabled={props.bloquearClick}
         onClick={manejarClickBoton}
      >
         {props.numeroPagina}
      </button>
   );
};

export default BotonPagina;
