import React, { useState } from "react";

import "./estilos/modalFiltroProyectos.scss";

const ModalFiltroProyectos = (props) => {
   const [configurandoFiltro, setConfigurandoFiltro] = useState(false);

   const terminarFiltroProyectos = () => {
      props.terminarFiltroProyectos();
   };

   const cancelarConfiguracionFiltro = () => {
      setConfigurandoFiltro(false);
   };

   return (
      <div>
         <h5>Filtrar Proyectos del Portafolio</h5>
         <label>
            <input type="checkbox" />
            Por nombre:
         </label>
         <label>
            Nombre del proyecto:
            <input />
         </label>
         <label>
            <input type="checkbox" />
            Por fecha:
         </label>
         <label>
            Fecha inicial:
            <input type="date" />
         </label>
         <label>
            Fecha final:
            <input type="date" />
         </label>
         <label>
            <input type="checkbox" />
            Por estado:
         </label>
         <label>
            Estado:
            <select>
               <option>Finalizado</option>
               <option>En progreso</option>
               <option>Incompleto</option>
            </select>
         </label>
         <label>
            <input type="checkbox" />
            Por privacidad:
         </label>
         <label>
            Privacidad:
            <select>
               <option>Público</option>
               <option>Privado</option>
            </select>
         </label>
         <label>
            <input type="checkbox" />
            Por categoría:
         </label>
         <button>Añadir categoría</button>

         <button>Confirmar filtro</button>
         <button>Cancelar</button>
      </div>
   );
};

export default ModalFiltroProyectos;
