import React, { useState } from "react";

import "./estilos/modalFiltroEntradas.scss";

import {
   obtenerFechaActual,
   obtenerHoraActual,
} from "../../../utilidad/funcionesFechaYHora.js";

const ModalFiltroEntradas = (props) => {
   const [filtroPorRango, setFiltroPorRango] = useState(true);
   const [datosFiltro, setDatosFiltro] = useState({
      horas: {
         horaInicial: obtenerHoraActual(),
         horaFinal: obtenerHoraActual(),
         horaEspecifica: obtenerHoraActual(),
      },
      fechas: {
         fechaInicial: obtenerFechaActual(),
         fechaFinal: obtenerFechaActual(),
         fechaEspecifica: obtenerFechaActual(),
      },
   });

   const CRITERIO_FILTRO_1 = "rango";
   const CRITERIO_FILTRO_2 = "especifico";

   const manejarCambioSeleccion = (evento) => {
      setFiltroPorRango(evento.target.value === CRITERIO_FILTRO_1);
   };

   const manejarCambioDatosFiltro = (evento) => {
      const { name, value } = evento.target;
      const datosFiltroActuales = datosFiltro,
         PREFIJO_HORA = "hora";

      if (name.startsWith(PREFIJO_HORA)) {
         datosFiltroActuales.horas[name] = value;
      } else {
         datosFiltroActuales.fechas[name] = value;
      }

      setDatosFiltro(datosFiltroActuales);
   };

   const terminarFiltroEntradas = () => {
      props.cambiarEstadoFiltroEntradas(false);
   };
   const realizarFiltroEntradas = () => {
      /*Consultar las entradas con base en la selección */

      terminarFiltroEntradas();
   };

   return (
      <div>
         <h5>Filtrar Entradas del Diario</h5>
         <label>
            <input
               type="radio"
               name="opciones-filtro"
               defaultChecked
               value={CRITERIO_FILTRO_1}
               onChange={manejarCambioSeleccion}
            />
            Por rango de tiempo:
         </label>
         {filtroPorRango && (
            <React.Fragment>
               <label>
                  Fecha inicial:
                  <input
                     type="date"
                     name="fechaInicial"
                     value={datosFiltro.fechas.fechaInicial}
                     onChange={manejarCambioDatosFiltro}
                  />
               </label>

               <label>
                  Fecha final:
                  <input
                     type="date"
                     name="fechaFinal"
                     value={datosFiltro.fechas.fechaFinal}
                     onChange={manejarCambioDatosFiltro}
                  />
               </label>

               <label>
                  Hora inicial:
                  <input
                     type="time"
                     name="horaInicial"
                     value={datosFiltro.horas.horaInicial}
                     onChange={manejarCambioDatosFiltro}
                  />
               </label>

               <label>
                  Hora final:
                  <input
                     type="time"
                     name="horaFinal"
                     value={datosFiltro.horas.horaFinal}
                     onChange={manejarCambioDatosFiltro}
                  />
               </label>
            </React.Fragment>
         )}

         <label>
            <input
               type="radio"
               name="opciones-filtro"
               value={CRITERIO_FILTRO_2}
               onChange={manejarCambioSeleccion}
            />
            Por fecha y hora especificas:
         </label>
         {!filtroPorRango && (
            <React.Fragment>
               <label>
                  Fecha:
                  <input
                     type="date"
                     name="fechaEspecifica"
                     value={datosFiltro.fechas.fechaEspecifica}
                     onChange={manejarCambioDatosFiltro}
                  />
               </label>

               <label>
                  Hora:
                  <input
                     type="time"
                     name="horaEspecifica"
                     value={datosFiltro.horas.horaEspecifica}
                     onChange={manejarCambioDatosFiltro}
                  />
               </label>
            </React.Fragment>
         )}

         <button onClick={realizarFiltroEntradas}>Confirmar</button>
         <button onClick={terminarFiltroEntradas}>Cancelar</button>
      </div>
   );
};

export default ModalFiltroEntradas;
