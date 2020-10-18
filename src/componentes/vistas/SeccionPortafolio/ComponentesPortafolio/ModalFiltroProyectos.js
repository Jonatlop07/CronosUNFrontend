import React, { useState } from "react";
import ReactDOM from "react-dom";

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

   const confirmarFiltroProyectos = () => {
      /* Modificar estado del componente superior correspondiente para mostrar
      los proyectos filtrados */

      terminarFiltroProyectos();
   };

   const terminarFiltroProyectos = () => {
      props.terminarFiltroProyectos();
   };

   return ReactDOM.createPortal(
      <div className="contenedor-modal-filtro-proyectos">
         <div className="modal-filtro">
            <h5>Filtrar Proyectos del Portafolio</h5>
            <div className="modal-filtro-seleccion">
               <label className="modal-filtro-seleccion-etiqueta-parametro">
                  <input
                     className="modal-filtro-seleccion-caja-seleccion"
                     type="checkbox"
                     onChange={() => {
                        setFiltroPorNombre(!filtroPorNombre);
                     }}
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
                     onChange={() => setFiltroPorFecha(!filtroPorFecha)}
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
                     onChange={() => setFiltroPorEstado(!filtroPorEstado)}
                  />
                  Por estado:
               </label>
               <label className="modal-filtro-seleccion-etiqueta">
                  Estado:
                  <select
                     className="modal-filtro-seleccion-selector"
                     value={estadoProyecto}
                     onChange={(e) => setEstadoProyecto(e.currentTarget.value)}
                  >
                     <option value="finalizado">Finalizado</option>
                     <option value="enProgreso">En Progreso</option>
                     <option value="incompleto">Incompleto</option>
                  </select>
               </label>
               <hr />
               <label className="modal-filtro-seleccion-etiqueta-parametro">
                  <input
                     className="modal-filtro-seleccion-caja-seleccion"
                     type="checkbox"
                     onChange={() =>
                        setFiltroPorPrivacidad(!filtroPorPrivacidad)
                     }
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
                     onChange={() => setFiltroPorCategoria(!filtroPorCategoria)}
                  />
                  Por categoría:
               </label>
               <div className="modal-filtro-seleccion-categorias">
                  <i
                     className="modal-filtro-seleccion-categorias-btn fas fa-plus-square"
                     onClick={(e) => {}}
                  >
                     Añadir categoría
                  </i>
               </div>
            </div>

            <button onClick={confirmarFiltroProyectos}>Confirmar filtro</button>
            <button onClick={terminarFiltroProyectos}>Cancelar</button>
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default ModalFiltroProyectos;
