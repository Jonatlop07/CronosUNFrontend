import React from "react";

const Proyecto = (props) => {
   return (
      <div>
         <div>
            <p>{props.titulo}</p>
            <p>{props.descripcion}</p>
            <button>Editar</button>
            <select>
               <option>Finalizado</option>
            </select>
         </div>
      </div>
   );
};

export default Proyecto;
