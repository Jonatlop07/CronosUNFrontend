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
         <div className="modal-filtro-seleccion">
            <label className="modal-filtro-seleccion-etiqueta">
               Fecha inicial:
               <input
                  className="modal-filtro-seleccion-fecha"
                  type="date"
                  name="fechaInicial"
                  value={fechaInicial}
                  onChange={(e) => setFechaInicial(e.currentTarget.value)}
               />
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               Fecha final:
               <input
                  className="modal-filtro-seleccion-fecha"
                  type="date"
                  name="fechaFinal"
                  value={fechaFinal}
                  onChange={(e) => setFechaFinal(e.currentTarget.value)}
               />
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               Hora inicial:
               <input
                  className="modal-filtro-seleccion-hora"
                  type="time"
                  name="horaInicial"
                  value={horaInicial}
                  onChange={(e) => setHoraInicial(e.currentTarget.value)}
               />
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               Hora final:
               <input
                  className="modal-filtro-seleccion-hora"
                  type="time"
                  name="horaFinal"
                  value={horaFinal}
                  onChange={(e) => setHoraFinal(e.currentTarget.value)}
               />
            </label>
         </div>

         <button onClick={realizarFiltroPorRango}>Confirmar</button>
         <button onClick={terminarFiltroPorRango}>Cancelar</button>
      </React.Fragment>
   );
};

export default FiltroPorRango;
