import React, { useState } from "react";

import ModalRegistroEntrada from "./ModalRegistroEntrada.js";
import ModalFiltroEntradas from "./ModalFiltroEntradas.js";

import "./estilos/panelOpcionesDiario.scss";

const PanelOpcionesDiario = (props) => {
   const [registrandoEntrada, setRegistrandoEntrada] = useState(false);
   const [filtrandoEntradas, setFiltrandoEntradas] = useState(false);

   return (
      <div className="panel-opciones-diario">
         <div className="panel-opciones-diario-grupo">
            <div className="panel-opciones-diario-grupo-opciones">
               <div className="panel-opciones-diario-grupo-opciones-btn">
                  <i
                     className="panel-opciones-diario-grupo-opciones-btn-icono fas fa-plus-circle"
                     onClick={() => setRegistrandoEntrada(true)}
                  >
                     <label className="panel-opciones-diario-grupo-opciones-btn-icono-etiqueta">
                        Nueva Entrada
                     </label>
                  </i>
               </div>
               <div className="panel-opciones-diario-grupo-opciones-btn">
                  <i
                     className="panel-opciones-diario-grupo-opciones-btn-icono fas fa-filter"
                     onClick={() => setFiltrandoEntradas(true)}
                  >
                     <label className="panel-opciones-diario-grupo-opciones-btn-icono-etiqueta">
                        Filtrar Entradas
                     </label>
                  </i>
               </div>
            </div>
            <div className="panel-opciones-diario-grupo-info">
               <i className="panel-opciones-diario-grupo-info-btn fas fa-info-circle"></i>
            </div>
         </div>

         {registrandoEntrada && (
            <ModalRegistroEntrada
               cambiarEstadoRegDeEntrada={setRegistrandoEntrada}
            />
         )}

         {filtrandoEntradas && (
            <ModalFiltroEntradas
               cambiarEstadoFiltroEntradas={setFiltrandoEntradas}
            />
         )}
      </div>
   );
};

export default PanelOpcionesDiario;
