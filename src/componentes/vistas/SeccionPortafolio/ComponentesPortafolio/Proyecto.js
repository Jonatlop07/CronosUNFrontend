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
         <div className="proyecto-opciones">
            <i className="fas fa-edit proyecto-opciones-editar"></i>
            <select className="proyecto-opciones-estado">
               <option>Finalizado</option>
               <option>En Progreso</option>
               <option>Incompleto</option>
            </select>

            <label className="proyecto-opciones-privacidad">
               <input
                  className="proyecto-opciones-privacidad-caja-seleccion"
                  type="checkbox"
                  onChange={manejarSeleccionPrivacidad}
                  defaultChecked={esPublico}
               />
               <span className="proyecto-opciones-privacidad-deslizador"></span>
               <label className="proyecto-opciones-privacidad-etiqueta">
                  {esPublico ? "Público" : "Privado"}
               </label>
            </label>
         </div>
      </div>
   );
};

export default Proyecto;
