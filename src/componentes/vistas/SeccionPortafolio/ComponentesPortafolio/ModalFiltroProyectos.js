import React, { useState } from "react";
import ReactDOM from "react-dom";

import CategoriaFiltroEspecifico from "./CategoriaFiltroEspecifico.js";

import { obtenerFechaActual } from "../../../../utilidad/funcionesFechaYHora.js";

const ModalFiltroProyectos = (props) => {
   const [filtroPorNombre, setFiltroPorNombre] = useState(false);
   const [filtroPorFecha, setFiltroPorFecha] = useState(false);
   const [filtroPorEstado, setFiltroPorEstado] = useState(false);
   const [filtroPorPrivacidad, setFiltroPorPrivacidad] = useState(false);
   const [filtroPorCategoria, setFiltroPorCategoria] = useState(false);

   const [titulo, setTitulo] = useState("");
   const [fechaInicial, setFechaInicial] = useState(obtenerFechaActual());
   const [fechaFinal, setFechaFinal] = useState(obtenerFechaActual());
   const [estadoProyecto, setEstadoProyecto] = useState("");
   const [esPublico, setEsPublico] = useState(false);

   const [categoriaActual, setCategoriaActual] = useState(props.categorias[0]);
   const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

   const [nombreClaseContenedor, setNombreClaseContenedor] = useState(
      "modal-filtro"
   );

   const agregarCategoria = () => {
      if (!categoriasSeleccionadas.includes(categoriaActual)) {
         const nuevasCategoriasSeleccionadas = categoriasSeleccionadas.concat(
            categoriaActual
         );
         setCategoriasSeleccionadas(nuevasCategoriasSeleccionadas);
      }
   };

   const removerCategoria = (categoriaARemover) => {
      const categorias = [...categoriasSeleccionadas];

      for (let i = 0; i < categorias.length; i++) {
         if (categorias[i] === categoriaARemover) {
            categorias.splice(i, 1);
         }
      }

      setCategoriasSeleccionadas(categorias);
   };

   const confirmarFiltroProyectos = () => {
      const filtros = {};

      if (filtroPorNombre) {
         filtros.titulo = titulo;
      }
      if (filtroPorFecha) {
         filtros.fechaInicio = fechaInicial;
         filtros.fechaFin = fechaFinal;
      }
      if (filtroPorEstado) {
         filtros.estado = estadoProyecto;
      }
      if (filtroPorPrivacidad) {
         filtros.privado = !esPublico;
      }
      if (filtroPorCategoria) {
         filtros.categorias = categoriasSeleccionadas;
      }

      props.filtrarProyectos(filtros);
      terminarFiltroProyectos();
   };

   const terminarFiltroProyectos = () => {
      setNombreClaseContenedor(nombreClaseContenedor.concat(" remover"));
      setTimeout(() => {
         props.terminarFiltroProyectos();
      }, 1500);
   };

   return ReactDOM.createPortal(
      <div className="contenedor-modal-filtro-proyectos">
         <div className={nombreClaseContenedor}>
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
                  Titulo del proyecto:
                  <input
                     className="modal-filtro-seleccion-texto"
                     value={titulo}
                     onChange={(e) => setTitulo(e.currentTarget.value)}
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
                  <select
                     className="modal-filtro-seleccion-selector modal-filtro-seleccion-selector-categorias"
                     value={categoriaActual}
                     onChange={(e) => setCategoriaActual(e.currentTarget.value)}
                  >
                     {props.categorias.map((categoria, indice) => (
                        <option key={`cat${indice}`} value={categoria}>
                           {categoria}
                        </option>
                     ))}
                  </select>
                  <i
                     className="modal-filtro-seleccion-categorias-btn fas fa-plus-square"
                     onClick={agregarCategoria}
                  >
                     Añadir categoría
                  </i>
               </div>
               <label className="modal-filtro-seleccion-etiqueta">
                  {categoriasSeleccionadas.length > 0
                     ? "Categorias seleccionadas:"
                     : "No hay categorias seleccionadas hasta el momento."}
               </label>
               <ul className="modal-filtro-seleccion-fechas">
                  {categoriasSeleccionadas.map(
                     (categoriaSeleccionada, indice) => (
                        <CategoriaFiltroEspecifico
                           key={`ca${indice}`}
                           categoria={categoriaSeleccionada}
                           removerCategoria={removerCategoria}
                        />
                     )
                  )}
               </ul>
            </div>

            <button onClick={confirmarFiltroProyectos}>Confirmar filtro</button>
            <button onClick={terminarFiltroProyectos}>Cancelar</button>
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default ModalFiltroProyectos;
