import React from "react";

const FechaFiltroEspecifico = (props) => {
   const removerFecha = () => {
      props.removerFecha(props.fecha);
   };

   return (
      <li>
         {props.fecha}{" "}
         <i className="far fa-times-circle" onClick={removerFecha}></i>
      </li>
   );
};

export default FechaFiltroEspecifico;
