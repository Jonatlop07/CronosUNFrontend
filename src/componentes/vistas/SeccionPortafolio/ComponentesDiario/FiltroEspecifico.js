import React, { useState } from "react";

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
      <div>
         <React.Fragment>
            <label>
               Fecha:
               <input
                  type="date"
                  name="fechaEspecifica"
                  value={fechaEspecifica}
                  onChange={(e) => setFechaEspecifica(e.currentTarget.value)}
               />
            </label>

            <label>
               Hora:
               <input
                  type="time"
                  name="horaEspecifica"
                  value={horaEspecifica}
                  onChange={(e) => setHoraEspecifica(e.currentTarget.value)}
               />
            </label>

            <button onClick={realizarFiltroEspecifico}>Confirmar</button>
            <button onClick={terminarFiltroEspecifico}>Cancelar</button>
         </React.Fragment>
      </div>
   );
};

export default FiltroEspecifico;
