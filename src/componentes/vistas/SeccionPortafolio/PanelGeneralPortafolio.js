import React, { useState } from "react";

import InfoPerfilPortafolio from "./InfoPerfilPortafolio.js";
import LineaDeTiempoProyectos from "./LineaDeTiempoProyectos.js";
import EstadisticasDePortafolio from "./EstadisticasDePortafolio.js";

import "./estilos/panelGeneralPortafolio.scss";

const indices = {
   INFO_PERFIL: 0,
   LINEA_TIEMPO: 1,
   ESTADISTICAS: 2,
};

const PanelGeneralPortafolio = (props) => {
   const [indice, setIndice] = useState(indices.INFO_PERFIL);

   const NUM_SECCIONES = 3;

   const irASeccionAnterior = () => {
      setIndice((indice + 2) % NUM_SECCIONES);
   };

   const irASeccionSiguiente = () => {
      setIndice((indice + 1) % NUM_SECCIONES);
   };

   const renderizarVistaPorIndice = () => {
      switch (indice) {
         case indices.INFO_PERFIL:
            return <InfoPerfilPortafolio />;
         case indices.LINEA_TIEMPO:
            return <LineaDeTiempoProyectos />;
         case indices.ESTADISTICAS:
            return <EstadisticasDePortafolio />;
      }
   };

   return (
      <div className="panel-general-portafolio">
         <div className="panel-general-portafolio-contenedor">
            {renderizarVistaPorIndice()}
         </div>
         <div className="panel-general-portafolio-direccion">
            <button onClick={irASeccionAnterior}>Ant</button>
            <button onClick={irASeccionSiguiente}>Sig</button>
         </div>
      </div>
   );
};

export default PanelGeneralPortafolio;
