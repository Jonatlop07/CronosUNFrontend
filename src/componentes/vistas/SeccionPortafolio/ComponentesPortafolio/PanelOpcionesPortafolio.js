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

   const registrarProyecto = (nuevoProyecto) => {
      props.registrarProyecto(nuevoProyecto);
      terminarRegistroNuevoProyecto();
   };

   const filtrarProyectos = (nuevosParametrosFiltro) => {
      props.filtrarProyectos(nuevosParametrosFiltro);
      terminarFiltroProyectos();
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
               <a className="panel-opciones-portafolio-grupo-info-btn" aria-label="Puedes registrar nuevos proyectos
               para tu portafolio o buscar proyectos a partir de diferentes filtros " tabIndex="0">
               <i className="fas fa-info-circle"></i>
               </a>
               
            </div>
         </div>

         {creandoNuevoProyecto && (
            <ModalNuevoProyecto
               categorias={props.categorias}
               registrarProyecto={registrarProyecto}
               terminarRegistroNuevoProyecto={terminarRegistroNuevoProyecto}
            />
         )}

         {filtrandoProyectos && (
            <ModalFiltroProyectos
               categorias={props.categorias}
               terminarFiltroProyectos={terminarFiltroProyectos}
               filtrarProyectos={filtrarProyectos}
            />
         )}
      </div>
   );
};

export default PanelOpcionesPortafolio;
