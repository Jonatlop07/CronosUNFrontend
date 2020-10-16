import React, { useState } from "react";

import "../estilos/modalFiltro.scss";

import {
   obtenerFechaActual,
   obtenerHoraActual,
} from "../../../../utilidad/funcionesFechaYHora.js";

const FiltroEspecifico = (props) => {
   const [fechaEspecifica, setFechaEspecifica] = useState(obtenerFechaActual());
   const [horaEspecifica, setHoraEspecifica] = useState(obtenerHoraActual());

   const realizarFiltroEspecifico = () => {
      props.realizarFiltroEspecifico({
         fechaEspecifica,
         horaEspecifica,
      });
   };

   const terminarFiltroEspecifico = () => {
      props.cancelarConfiguracionFiltro();
   };

   return (
      <React.Fragment>
         <div className="modal-filtro-seleccion">
            <label className="modal-filtro-seleccion-etiqueta">
               Fecha:
               <input
                  className="modal-filtro-seleccion-fecha"
                  type="date"
                  name="fechaEspecifica"
                  value={fechaEspecifica}
                  onChange={(e) => setFechaEspecifica(e.currentTarget.value)}
               />
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               Hora:
               <input
                  className="modal-filtro-seleccion-hora"
                  type="time"
                  name="horaEspecifica"
                  value={horaEspecifica}
                  onChange={(e) => setHoraEspecifica(e.currentTarget.value)}
               />
            </label>
         </div>

         <button onClick={realizarFiltroEspecifico}>Confirmar</button>
         <button onClick={terminarFiltroEspecifico}>Cancelar</button>
      </React.Fragment>
   );
};

export default FiltroEspecifico;
