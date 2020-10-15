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
      <div>
         <button onClick={iniciarRegistroNuevoProyecto}>Nuevo Proyecto</button>
         {creandoNuevoProyecto && (
            <ModalNuevoProyecto
               terminarRegistroNuevoProyecto={terminarRegistroNuevoProyecto}
            />
         )}
         <button onClick={iniciarFiltroProyectos}>Filtrar Proyectos</button>
         {filtrandoProyectos && (
            <ModalFiltroProyectos
               terminarFiltroProyectos={terminarFiltroProyectos}
            />
         )}
         {/* Aquí va un popover */}
         <button>Inf</button>
      </div>
   );
};

export default PanelOpcionesPortafolio;
