import React from "react";

import PanelGeneralPortafolio from "./PanelGeneralPortafolio.js";
import BarraBusqueda from "./BarraBusqueda.js";
import SubseccionDiario from "./ComponentesDiario/SubseccionDiario.js";
import SubseccionPortafolio from "./ComponentesPortafolio/SubseccionPortafolio.js";

import "./estilos/seccionPortafolio.scss";

const SeccionPortafolio = (props) => {
   return (
      <div className="seccion-portafolio">
         <PanelGeneralPortafolio />
         <BarraBusqueda />
         <div className="seccion-portafolio-subsecciones">
            <SubseccionDiario auth={`Bearer ${props.auth}`} idUsuario={props.idUsuario} />
            <SubseccionPortafolio auth={`Bearer ${props.auth}`} idUsuario={props.idUsuario} />
         </div>
      </div>
   );
};

export default SeccionPortafolio;
