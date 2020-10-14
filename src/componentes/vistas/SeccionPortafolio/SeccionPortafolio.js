import React from "react";

import PanelPortafolio from "./PanelPortafolio.js";
import SubseccionDiario from "./SubseccionDiario.js";
import SubseccionPortafolio from "./SubseccionPortafolio.js";

import "./estilos/seccionPortafolio.scss";

const SeccionPortafolio = (props) => {
   return (
      <div className="seccion-portafolio">
         <PanelPortafolio />
         <div className="seccion-portafolio-subsecciones">
            <SubseccionDiario />
            <SubseccionPortafolio />
         </div>
      </div>
   );
};

export default SeccionPortafolio;
