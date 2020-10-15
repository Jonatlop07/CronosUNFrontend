import React from "react";

import PanelOpcionesPortafolio from "./PanelOpcionesPortafolio.js";
import ContenedorDeProyectos from "./ContenedorDeProyectos.js";

import "./estilos/subseccionPortafolio.scss";

const SubseccionPortafolio = (props) => {
   return (
      <div className="subseccion-portafolio">
         <h5 className="subseccion-portafolio-nombre">Tu Portafolio</h5>
         <div className="subseccion-portafolio-principal">
            <PanelOpcionesPortafolio />
            <ContenedorDeProyectos />
         </div>
      </div>
   );
};

export default SubseccionPortafolio;
