import React, { useState } from "react";

import ModalNuevoProyecto from "./ModalNuevoProyecto.js";
import ModalFiltroProyectos from "./ModalFiltroProyectos.js";

import "./estilos/panelOpcionesPortafolio.scss";

const PanelOpcionesPortafolio = (props) => {
   const [creandoNuevoProyecto, setCreandoNuevoProyecto] = useState(false);
   const [filtrandoProyectos, setFiltrandoProyectos] = useState(false);

   const iniciarRegistroNuevoProyecto = () => {
      setCreandoNuevoProyecto(true);
   };

   const terminarRegistroNuevoProyecto = () => {
      setCreandoNuevoProyecto(false);
   };

   const iniciarFiltroProyectos = () => {
      setFiltrandoProyectos(true);
   };

   const terminarFiltroProyectos = () => {
      setFiltrandoProyectos(false);
   };

   return (
      <div className="panel-opciones-portafolio">
         <center>
            <button
               className="panel-opciones-portafolio-btn"
               onClick={iniciarRegistroNuevoProyecto}
            >
               Nuevo Proyecto
            </button>
            {creandoNuevoProyecto && (
               <ModalNuevoProyecto
                  terminarRegistroNuevoProyecto={terminarRegistroNuevoProyecto}
               />
            )}
            <button
               className="panel-opciones-portafolio-btn"
               onClick={iniciarFiltroProyectos}
            >
               Filtrar Proyectos
            </button>
            {filtrandoProyectos && (
               <ModalFiltroProyectos
                  terminarFiltroProyectos={terminarFiltroProyectos}
               />
            )}
            {/* Aquí va un popover */}
            <button className="panel-opciones-portafolio-btn">Inf</button>
         </center>
      </div>
   );
};

export default PanelOpcionesPortafolio;
