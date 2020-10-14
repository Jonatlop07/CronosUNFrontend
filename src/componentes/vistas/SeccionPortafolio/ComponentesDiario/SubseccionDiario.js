import React from "react";

import PanelOpcionesDiario from "./PanelOpcionesDiario.js";
import ContenedorDiario from "./ContenedorDiario.js";

const SubseccionDiario = (props) => {
   return (
      <div>
         <PanelOpcionesDiario />
         <ContenedorDiario />
      </div>
   );
};

export default SubseccionDiario;
