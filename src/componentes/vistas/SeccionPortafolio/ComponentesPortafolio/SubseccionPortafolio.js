import React, { useState } from "react";

import PanelOpcionesPortafolio from "./PanelOpcionesPortafolio.js";
import ContenedorDeProyectos from "./ContenedorDeProyectos.js";
import ContenedorBotonesResultado from "../ContenedorBotonesResultado.js";

const SubseccionPortafolio = (props) => {
   return (
      <div className="subseccion-portafolio">
         <label>
            <h5 className="subseccion-portafolio-nombre">Tu Portafolio</h5>
         </label>
         <div className="subseccion-portafolio-principal">
            <PanelOpcionesPortafolio />
            <ContenedorDeProyectos />
            <ContenedorBotonesResultado />
         </div>
      </div>
   );
};

export default SubseccionPortafolio;