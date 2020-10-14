import React, { useState } from "react";

import ModalRegistroEntrada from "./ModalRegistroEntrada.js";
import ModalFiltroEntradas from "./ModalFiltroEntradas.js";

import "./estilos/panelDiario.scss";

const PanelDiario = (props) => {
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
      </div>
   );
};

export default PanelDiario;
