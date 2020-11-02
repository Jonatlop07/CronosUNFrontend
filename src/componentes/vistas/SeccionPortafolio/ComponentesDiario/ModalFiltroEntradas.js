import React, { useState } from "react";
import ReactDOM from "react-dom";

import FiltroPorRango from "./FiltroPorRango";
import FiltroEspecifico from "./FiltroEspecifico";

const ModalFiltroEntradas = (props) => {
   const [configurandoFiltro, setConfigurandoFiltro] = useState(false);
   const [filtrandoPorRango, setFiltrandoPorRango] = useState(false);
   const [nombreClaseContenedor, setNombreClaseContenedor] = useState(
      "modal-filtro"
   );

   const terminarFiltroEntradas = () => {
      setNombreClaseContenedor(nombreClaseContenedor.concat(" remover"));
      setTimeout(() => {
         props.terminarFiltroEntradas();
      }, 1500);
   };

   const seleccionarFiltroPorRango = () => {
      setFiltrandoPorRango(true);
      setConfigurandoFiltro(true);
   };

   const seleccionarFiltroEspecifico = () => {
      setFiltrandoPorRango(false);
      setConfigurandoFiltro(true);
   };

   const realizarFiltroPorRango = (parametrosDeFiltro) => {
      const {
         fechaInicial,
         fechaFinal,
         horaInicial,
         horaFinal,
      } = parametrosDeFiltro;
      /*Consultar las entradas*/

      terminarFiltroEntradas();
   };

   const realizarFiltroEspecifico = (parametrosDeFiltro) => {
      const { fechaEspecifica, horaEspecifica } = parametrosDeFiltro;
      /*Consultar las entradas*/

      terminarFiltroEntradas();
   };

   const cancelarConfiguracionFiltro = () => {
      setConfigurandoFiltro(false);
   };

   return ReactDOM.createPortal(
      <div className="contenedor-modal-filtro-entradas">
         <div className={nombreClaseContenedor}>
            <h5>Filtrar Entradas del Diario</h5>
            {configurandoFiltro ? (
               filtrandoPorRango ? (
                  <FiltroPorRango
                     realizarFiltroPorRango={realizarFiltroPorRango}
                     cancelarConfiguracionFiltro={cancelarConfiguracionFiltro}
                  />
               ) : (
                  <FiltroEspecifico
                     realizarFiltroEspecifico={realizarFiltroEspecifico}
                     cancelarConfiguracionFiltro={cancelarConfiguracionFiltro}
                  />
               )
            ) : (
               <React.Fragment>
                  <div className="modal-filtro-opciones">
                     <button onClick={seleccionarFiltroPorRango}>
                        Por rango de fecha y hora
                     </button>
                     <button onClick={seleccionarFiltroEspecifico}>
                        Por fecha específica
                     </button>
                  </div>
                  <button onClick={terminarFiltroEntradas}>Cancelar</button>
               </React.Fragment>
            )}
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default ModalFiltroEntradas;
