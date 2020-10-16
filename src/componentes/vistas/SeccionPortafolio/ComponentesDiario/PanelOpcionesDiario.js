import React, { useState } from "react";

import ModalRegistroEntrada from "./ModalRegistroEntrada.js";
import ModalFiltroEntradas from "./ModalFiltroEntradas.js";

import "./estilos/panelOpcionesDiario.scss";

const PanelOpcionesDiario = (props) => {
   const [registrandoEntrada, setRegistrandoEntrada] = useState(false);
   const [filtrandoEntradas, setFiltrandoEntradas] = useState(false);

   const iniciarRegistroNuevaEntrada = () => {
      setRegistrandoEntrada(true);
   };

   const iniciarFiltroEntradas = () => {
      setFiltrandoEntradas(true);
   };

   return (
      <div className="panel-opciones-diario">
         <center>
            <button
               className="panel-opciones-diario-btn"
               onClick={iniciarRegistroNuevaEntrada}
            >
               Nueva Entrada
            </button>
            {registrandoEntrada && (
               <ModalRegistroEntrada
                  cambiarEstadoRegDeEntrada={setRegistrandoEntrada}
               />
            )}
            <button
               className="panel-opciones-diario-btn"
               onClick={iniciarFiltroEntradas}
            >
               Filtrar Entradas
            </button>
            {filtrandoEntradas && (
               <ModalFiltroEntradas
                  cambiarEstadoFiltroEntradas={setFiltrandoEntradas}
               />
            )}
            {/* Aquí va un popover */}
            <button className="panel-opciones-diario-btn">Inf</button>
         </center>
      </div>
   );
};

export default PanelOpcionesDiario;
