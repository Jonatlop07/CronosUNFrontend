import React, { useState } from "react";

import {
   obtenerFechaActual,
   obtenerHoraActual,
} from "../../../../utilidad/funcionesFechaYHora.js";

const FiltroPorRango = (props) => {
   const [fechaInicial, setFechaInicial] = useState(obtenerFechaActual());
   const [fechaFinal, setFechaFinal] = useState(obtenerFechaActual());
   const [horaInicial, setHoraInicial] = useState(obtenerHoraActual());
   const [horaFinal, setHoraFinal] = useState(obtenerHoraActual());

   const realizarFiltroPorRango = () => {
      props.realizarFiltroPorRango({
         fechaInicial,
         fechaFinal,
         horaInicial,
         horaFinal,
      });
   };

   const terminarFiltroPorRango = () => {
      props.cancelarConfiguracionFiltro();
   };

   return (
      <React.Fragment>
         <label>
            Fecha inicial:
            <input
               type="date"
               name="fechaInicial"
               value={fechaInicial}
               onChange={(e) => setFechaInicial(e.currentTarget.value)}
            />
         </label>

         <label>
            Fecha final:
            <input
               type="date"
               name="fechaFinal"
               value={fechaFinal}
               onChange={(e) => setFechaFinal(e.currentTarget.value)}
            />
         </label>

         <label>
            Hora inicial:
            <input
               type="time"
               name="horaInicial"
               value={horaInicial}
               onChange={(e) => setHoraInicial(e.currentTarget.value)}
            />
         </label>

         <label>
            Hora final:
            <input
               type="time"
               name="horaFinal"
               value={horaFinal}
               onChange={(e) => setHoraFinal(e.currentTarget.value)}
            />
         </label>

         <button onClick={realizarFiltroPorRango}>Confirmar</button>
         <button onClick={terminarFiltroPorRango}>Cancelar</button>
      </React.Fragment>
   );
};

export default FiltroPorRango;
