import React, { useState } from "react";

const Proyecto = (props) => {
   const [estadoProyecto, setEstadoProyecto] = useState("enProgreso");
   const [esPublico, setEsPublico] = useState(false);

   return (
      <div className="proyecto">
         <p className="proyecto-titulo">{props.titulo}</p>
         <p className="proyecto-descripcion">{props.descripcion}</p>
         <div
            className="proyecto-imagen"
            style={{ backgroundImage: `url(${props.imagenFondo})` }}
         >
            <img />
         </div>
         <div className="proyecto-opciones">
            <i className="proyecto-opciones-editar fad fa-edit"></i>
            <select
               className="proyecto-opciones-estado"
               value={estadoProyecto}
               onChange={(e) => setEstadoProyecto(e.currentTarget.value)}
            >
               <option value="finalizado">Finalizado</option>
               <option value="enProgreso">En Progreso</option>
               <option value="incompleto">Incompleto</option>
            </select>

            <label className="proyecto-opciones-privacidad">
               <input
                  className="proyecto-opciones-privacidad-caja-seleccion"
                  type="checkbox"
                  onChange={(e) => setEsPublico(!esPublico)}
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
