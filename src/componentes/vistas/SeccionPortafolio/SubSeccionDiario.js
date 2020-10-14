import React from "react";

import PanelDiario from "./PanelDiario.js";
import ContenedorDiario from "./ContenedorDiario.js";

const SubseccionDiario = (props) => {
   return (
      <div>
         <PanelDiario />
         <ContenedorDiario />
      </div>
   );
};

export default SubseccionDiario;
