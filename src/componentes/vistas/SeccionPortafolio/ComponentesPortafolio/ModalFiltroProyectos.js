import React, { useState } from "react";

import "../estilos/modalFiltro.scss";

import { obtenerFechaActual } from "../../../../utilidad/funcionesFechaYHora.js";

const ModalFiltroProyectos = (props) => {
   const [filtroPorNombre, setFiltroPorNombre] = useState(false);
   const [filtroPorFecha, setFiltroPorFecha] = useState(false);
   const [filtroPorEstado, setFiltroPorEstado] = useState(false);
   const [filtroPorPrivacidad, setFiltroPorPrivacidad] = useState(false);
   const [filtroPorCategoria, setFiltroPorCategoria] = useState(false);

   const [nombreProyecto, setNombreProyecto] = useState("");

   const [fechaInicial, setFechaInicial] = useState(obtenerFechaActual());
   const [fechaFinal, setFechaFinal] = useState(obtenerFechaActual());

   const [estadoProyecto, setEstadoProyecto] = useState("");

   const [esPublico, setEsPublico] = useState(false);

   const [categorias, setCategorias] = useState([]);

   const manejarFiltroPorNombre = () => {
      setFiltroPorNombre(!filtroPorNombre);
   };

   const manejarFiltroPorFecha = () => {
      setFiltroPorFecha(!filtroPorFecha);
   };

   const manejarFiltroPorEstado = () => {
      setFiltroPorEstado(!filtroPorEstado);
   };

   const manejarFiltroPorPrivacidad = () => {
      setFiltroPorPrivacidad(!filtroPorPrivacidad);
   };

   const manejarFiltroPorCategoria = () => {
      setFiltroPorCategoria(!filtroPorCategoria);
   };

   const terminarFiltroProyectos = () => {
      props.terminarFiltroProyectos();
   };

   return (
      <div className="modal-filtro">
         <h5>Filtrar Proyectos del Portafolio</h5>
         <div className="modal-filtro-seleccion">
            <label className="modal-filtro-seleccion-etiqueta-parametro">
               <input
                  className="modal-filtro-seleccion-caja-seleccion"
                  type="checkbox"
                  onChange={manejarFiltroPorNombre}
               />
               Por nombre:
            </label>
            <label className="modal-filtro-seleccion-etiqueta">
               Nombre del proyecto:
               <input
                  className="modal-filtro-seleccion-texto"
                  value={nombreProyecto}
                  onChange={(e) => setNombreProyecto(e.currentTarget.value)}
               />
            </label>
            <hr />
            <label className="modal-filtro-seleccion-etiqueta-parametro">
               <input
                  className="modal-filtro-seleccion-caja-seleccion"
                  type="checkbox"
                  onChange={manejarFiltroPorFecha}
               />
               Por fecha:
            </label>
            <label className="modal-filtro-seleccion-etiqueta">
               Fecha inicial:
               <input
                  className="modal-filtro-seleccion-fecha"
                  type="date"
                  value={fechaInicial}
                  onChange={(e) => setFechaInicial(e.currentTarget.value)}
               />
            </label>
            <label className="modal-filtro-seleccion-etiqueta">
               Fecha final:
               <input
                  className="modal-filtro-seleccion-fecha"
                  type="date"
                  value={fechaInicial}
                  onChange={(e) => setFechaFinal(e.currentTarget.value)}
               />
            </label>
            <hr />
            <label className="modal-filtro-seleccion-etiqueta-parametro">
               <input
                  className="modal-filtro-seleccion-caja-seleccion"
                  type="checkbox"
                  onChange={manejarFiltroPorEstado}
               />
               Por estado:
            </label>
            <label className="modal-filtro-seleccion-etiqueta">
               Estado:
               <select className="modal-filtro-seleccion-selector">
                  <option>Finalizado</option>
                  <option>En progreso</option>
                  <option>Incompleto</option>
               </select>
            </label>
            <hr />
            <label className="modal-filtro-seleccion-etiqueta-parametro">
               <input
                  className="modal-filtro-seleccion-caja-seleccion"
                  type="checkbox"
                  onChange={manejarFiltroPorPrivacidad}
               />
               Por privacidad:
            </label>
            <label className="modal-filtro-seleccion-etiqueta">
               <input
                  className="modal-filtro-seleccion-radio"
                  type="radio"
                  name="privacidad"
                  defaultChecked
                  value={!esPublico}
                  onChange={(e) => setEsPublico(e.currentTarget.value)}
               />
               Privado
            </label>
            <label className="modal-filtro-seleccion-etiqueta">
               <input
                  className="modal-filtro-seleccion-radio"
                  type="radio"
                  name="privacidad"
                  value={esPublico}
                  onChange={(e) => setEsPublico(e.currentTarget.value)}
               />
               Publico
            </label>
            <hr />
            <label className="modal-filtro-seleccion-etiqueta-parametro">
               <input
                  className="modal-filtro-seleccion-caja-seleccion"
                  type="checkbox"
                  onChange={manejarFiltroPorCategoria}
               />
               Por categoría:
            </label>
            <div className="modal-filtro-seleccion-categorias">
               <i className="modal-filtro-seleccion-categorias-btn fas fa-plus-square">
                  Añadir categoría
               </i>
            </div>
         </div>

         <button>Confirmar filtro</button>
         <button onClick={terminarFiltroProyectos}>Cancelar</button>
      </div>
   );
};

export default ModalFiltroProyectos;
