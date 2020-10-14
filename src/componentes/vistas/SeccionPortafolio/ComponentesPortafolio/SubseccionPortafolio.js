import React from "react";

import PanelOpcionesPortafolio from "./PanelOpcionesPortafolio.js";
import ContenedorDeProyectos from "./ContenedorDeProyectos.js";

import "./estilos/subseccionPortafolio.scss";

const SubseccionPortafolio = (props) => {
   return (
      <div>
         <PanelOpcionesPortafolio />
         <ContenedorDeProyectos />
      </div>
   );
};

export default SubseccionPortafolio;
