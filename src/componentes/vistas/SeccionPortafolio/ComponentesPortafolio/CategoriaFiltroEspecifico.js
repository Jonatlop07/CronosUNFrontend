import React from "react";

const CategoriaFiltroEspecifico = (props) => {
   const removerCategoria = () => {
      props.removerCategoria(props.categoria);
   };

   return (
      <li>
         {props.categoria}{" "}
         <i className="far fa-times-circle" onClick={removerCategoria}></i>
      </li>
   );
};

export default CategoriaFiltroEspecifico;
