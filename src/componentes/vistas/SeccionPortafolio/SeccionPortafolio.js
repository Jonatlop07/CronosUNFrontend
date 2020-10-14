import React from "react";

import PanelPortafolio from "./PanelPortafolio.js";
import SubSeccionDiario from "./SubseccionDiario.js";
import SubSeccionPortafolio from "./SubseccionPortafolio.js";

import "./estilos/seccionPortafolio.scss";

const SeccionPortafolio = (props) => {
   return (
      <div className="seccion-portafolio">
         <PanelPortafolio />
         <div className="seccion-portafolio-subsecciones">
            <SubSeccionDiario />
            <SubSeccionPortafolio />
         </div>
      </div>
   );
};

export default SeccionPortafolio;
