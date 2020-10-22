import React, { useState } from "react";

import FechaFiltroEspecifico from "./FechaFiltroEspecifico.js";

import {
   obtenerFechaActual,
   obtenerHoraActual,
} from "../../../../utilidad/funcionesFechaYHora.js";

const FiltroEspecifico = (props) => {
   const [fecha, setFecha] = useState(obtenerFechaActual());
   const [fechasSeleccionadas, setFechasSeleccionadas] = useState([]);

   const agregarFecha = () => {
      if (!fechasSeleccionadas.includes(fecha)) {
         const nuevasFechasSeleccionadas = fechasSeleccionadas.concat(fecha);
         setFechasSeleccionadas(nuevasFechasSeleccionadas);
      }
   };

   const removerFecha = (fechaARemover) => {
      const fechas = [...fechasSeleccionadas];

      for (let i = 0; i < fechas.length; i++) {
         if (fechas[i] === fechaARemover) {
            fechas.splice(i, 1);
         }
      }

      setFechasSeleccionadas(fechas);
   };

   const realizarFiltroEspecifico = () => {
      props.realizarFiltroEspecifico(fechasSeleccionadas);
   };

   const terminarFiltroEspecifico = () => {
      props.cancelarConfiguracionFiltro();
   };

   return (
      <React.Fragment>
         <div className="modal-filtro-seleccion">
            <label className="modal-filtro-seleccion-etiqueta">
               Selecciona una fecha:
               <input
                  className="modal-filtro-seleccion-fecha"
                  type="date"
                  name="fechaEspecifica"
                  value={fecha}
                  onChange={(e) => setFecha(e.currentTarget.value)}
               />
               <i
                  className="modal-filtro-seleccion-agregar fas fa-plus"
                  onClick={agregarFecha}
               >
                  Añadir fecha
               </i>
            </label>

            <label className="modal-filtro-seleccion-etiqueta">
               {fechasSeleccionadas.length > 0
                  ? "Fechas añadidas:"
                  : "No hay fechas añadidas hasta el momento."}
            </label>
            <ul className="modal-filtro-seleccion-fechas">
               {fechasSeleccionadas.map((fechaSeleccionada, indice) => (
                  <FechaFiltroEspecifico
                     key={`fe${indice}`}
                     fecha={fechaSeleccionada}
                     removerFecha={removerFecha}
                  />
               ))}
            </ul>
         </div>

         <button onClick={realizarFiltroEspecifico}>Confirmar</button>
         <button onClick={terminarFiltroEspecifico}>Cancelar</button>
      </React.Fragment>
   );
};

export default FiltroEspecifico;
