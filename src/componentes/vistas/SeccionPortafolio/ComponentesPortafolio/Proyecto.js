import React, { useState } from "react";

import "./estilos/proyecto.scss";

const Proyecto = (props) => {
   const [esPublico, setEsPublico] = useState(false);

   const manejarSeleccionPrivacidad = () => {
      setEsPublico(!esPublico);
   };

   return (
      <div className="proyecto">
         <p className="proyecto-titulo">{props.titulo}</p>
         <p className="proyecto-descripcion">{props.descripcion}</p>
         <button className="proyecto-editar">Editar</button>
         <select className="proyecto-estado">
            <option>Finalizado</option>
            <option>En Progreso</option>
            <option>Incompleto</option>
         </select>
         <label className="proyecto-label-privacidad">
            {esPublico ? "Público" : "Privado"}
         </label>
         <label className="proyecto-privacidad">
            <input
               className="proyecto-privacidad-caja-seleccion"
               type="checkbox"
               onChange={manejarSeleccionPrivacidad}
               defaultChecked={esPublico}
            />
            <span className="proyecto-privacidad-deslizador"></span>
         </label>
      </div>
   );
};

export default Proyecto;
