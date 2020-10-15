import React, { useState } from "react";

import "./estilos/proyecto.scss";

const Proyecto = (props) => {
   const [esPublico, setEsPublico] = useState(false);

   const manejarSeleccionPrivacidad = () => {
      setEsPublico(!esPublico);
   };

   return (
      <div>
         <div>
            <p>{props.titulo}</p>
            <p>{props.descripcion}</p>
            <button>Editar</button>
            <select>
               <option>Finalizado</option>
               <option>En Progreso</option>
               <option>Incompleto</option>
            </select>
            <label>{esPublico ? "Público" : "Privado"}</label>
            <label className="switch">
               <input
                  type="checkbox"
                  onChange={manejarSeleccionPrivacidad}
                  defaultChecked={esPublico}
               />
               <span className="slider round"></span>
            </label>
         </div>
      </div>
   );
};

export default Proyecto;
