import React, { useState } from "react";

import {
   obtenerFechaActual,
   obtenerHoraActual,
} from "../../../../utilidad/funcionesFechaYHora.js";

const FiltroPorRango = (props) => {
   const [fechaInicio, setFechaInicio] = useState(obtenerFechaActual());
   const [fechaFin, setFechaFin] = useState(obtenerFechaActual());
   const [horaInicio, setHoraInicio] = useState(obtenerHoraActual());
   const [horaFin, setHoraFin] = useState(obtenerHoraActual());

   const realizarFiltroPorRango = () => {
      props.filtrarEntradasDiario({
         fechaInicio,
         fechaFin,
         horaInicio: `${horaInicio}:00`,
         horaFin: `${horaFin}:00`,
      });
      terminarFiltroPorRango();
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
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.currentTarget.value)}
               />
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               Fecha final:
               <input
                  className="modal-filtro-seleccion-fecha"
                  type="date"
                  name="fechaFinal"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.currentTarget.value)}
               />
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               Hora inicial:
               <input
                  className="modal-filtro-seleccion-hora"
                  type="time"
                  name="horaInicial"
                  value={horaInicio}
                  onChange={(e) => setHoraInicio(e.currentTarget.value)}
               />
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               Hora final:
               <input
                  className="modal-filtro-seleccion-hora"
                  type="time"
                  name="horaFinal"
                  value={horaFin}
                  onChange={(e) => setHoraFin(e.currentTarget.value)}
               />
            </label>
         </div>

         <button onClick={realizarFiltroPorRango}>Confirmar</button>
         <button onClick={terminarFiltroPorRango}>Cancelar</button>
      </React.Fragment>
   );
};

export default FiltroPorRango;
