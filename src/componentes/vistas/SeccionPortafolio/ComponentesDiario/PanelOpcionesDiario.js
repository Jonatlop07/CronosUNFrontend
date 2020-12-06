import React, { useState } from "react";

import ModalRegistroEntrada from "./ModalRegistroEntrada.js";
import ModalFiltroEntradas from "./ModalFiltroEntradas.js";

const PanelOpcionesDiario = (props) => {
   const [registrandoEntrada, setRegistrandoEntrada] = useState(false);
   const [filtrandoEntradas, setFiltrandoEntradas] = useState(false);

   const terminarRegistroEntrada = () => {
      setRegistrandoEntrada(false);
   };

   const terminarFiltroEntradas = () => {
      setFiltrandoEntradas(false);
   };

   const filtrarEntradasDiario = (nuevosParametrosFiltro) => {
      props.filtrarEntradasDiario(nuevosParametrosFiltro);
      terminarFiltroEntradas();
   };

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
               <a className="panel-opciones-diario-grupo-info-btn" aria-label="Aquí puedes ver y registrar entradas de tu diario
               e incluso filtrarlos por fechas para facilitar la búsqueda " tabIndex="0"> 
               <i className="fas fa-info-circle"></i>
               </a>
            </div>
         </div>

         {registrandoEntrada && (
            <ModalRegistroEntrada
               registrarEntradaDiario={props.registrarEntradaDiario}
               terminarRegistroEntrada={terminarRegistroEntrada}
            />
         )}
         {filtrandoEntradas && (
            <ModalFiltroEntradas
               terminarFiltroEntradas={terminarFiltroEntradas}
               filtrarEntradasDiario={filtrarEntradasDiario}
            />
         )}
      </div>
   );
};

export default PanelOpcionesDiario;
