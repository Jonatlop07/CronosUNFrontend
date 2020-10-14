import React, { useState } from "react";

import "./estilos/panelOpcionesPortafolio.scss";

const PanelOpcionesPortafolio = (props) => {
   const [filtrandoProyectos, setFiltrandoProyectos] = useState(false);

   const iniciarRegistroNuevoProyecto = () => {};

   const iniciarFiltroProyectos = () => {
      setFiltrandoProyectos(true);
   };

   return (
      <div>
         <button onClick={iniciarRegistroNuevoProyecto}>Nuevo Proyecto</button>
         <button onClick={iniciarFiltroProyectos}>Filtrar Proyectos</button>
         {/* Aquí va un popover */}
         <button>Inf</button>
      </div>
   );
};

export default PanelOpcionesPortafolio;
