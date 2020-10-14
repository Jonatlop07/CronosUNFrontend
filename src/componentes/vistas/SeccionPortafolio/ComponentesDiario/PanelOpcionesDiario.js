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
      <div>
         <button onClick={iniciarRegistroNuevaEntrada}>Nueva Entrada</button>
         {registrandoEntrada && (
            <ModalRegistroEntrada
               cambiarEstadoRegDeEntrada={setRegistrandoEntrada}
            />
         )}
         <button onClick={iniciarFiltroEntradas}>Filtrar Entradas</button>
         {filtrandoEntradas && (
            <ModalFiltroEntradas
               cambiarEstadoFiltroEntradas={setFiltrandoEntradas}
            />
         )}
         {/* Aquí va un popover */}
         <button>Inf</button>
      </div>
   );
};

export default PanelOpcionesDiario;
