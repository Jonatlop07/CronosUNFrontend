import React, { useState } from "react";

import ModalNuevoProyecto from "./ModalNuevoProyecto.js";
import ModalFiltroProyectos from "./ModalFiltroProyectos.js";

const PanelOpcionesPortafolio = (props) => {
   const [creandoNuevoProyecto, setCreandoNuevoProyecto] = useState(false);
   const [filtrandoProyectos, setFiltrandoProyectos] = useState(false);

   const terminarRegistroNuevoProyecto = () => {
      setCreandoNuevoProyecto(false);
   };

   const terminarFiltroProyectos = () => {
      setFiltrandoProyectos(false);
   };

   return (
      <div className="panel-opciones-portafolio">
         <div className="panel-opciones-portafolio-grupo">
            <div className="panel-opciones-portafolio-grupo-opciones">
               <div className="panel-opciones-portafolio-grupo-opciones-btn">
                  <i
                     className="panel-opciones-portafolio-grupo-opciones-btn-icono fas fa-plus-circle"
                     onClick={() => {
                        setCreandoNuevoProyecto(true);
                     }}
                  >
                     <label className="panel-opciones-portafolio-grupo-opciones-btn-icono-etiqueta">
                        Nuevo Proyecto
                     </label>
                  </i>
               </div>
               <div className="panel-opciones-portafolio-grupo-opciones-btn">
                  <i
                     className="panel-opciones-portafolio-grupo-opciones-btn-icono fas fa-filter"
                     onClick={() => {
                        setFiltrandoProyectos(true);
                     }}
                  >
                     <label className="panel-opciones-portafolio-grupo-opciones-btn-icono-etiqueta">
                        Filtrar Proyectos
                     </label>
                  </i>
               </div>
            </div>
            <div className="panel-opciones-portafolio-grupo-info">
               <i className="panel-opciones-portafolio-grupo-info-btn fas fa-info-circle"></i>
            </div>
         </div>

         {creandoNuevoProyecto && (
            <ModalNuevoProyecto
               terminarRegistroNuevoProyecto={terminarRegistroNuevoProyecto}
            />
         )}

         {filtrandoProyectos && (
            <ModalFiltroProyectos
               terminarFiltroProyectos={terminarFiltroProyectos}
            />
         )}
      </div>
   );
};

export default PanelOpcionesPortafolio;