import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { obtenerFechaActual } from "../../../../utilidad/funcionesFechaYHora.js";

const ModalNuevoProyecto = (props) => {
   const [titulo, setTitulo] = useState("");
   const [categoria, setCategoria] = useState("");
   const [descripcion, setDescripcion] = useState("");
   const [esPublico, setEsPublico] = useState(false);
   const [nombreClaseContenedor, setNombreClaseContenedor] = useState(
      "modal-nuevo-proyecto"
   );

   const INSTRUCCIONES_DESCRIPCION =
      "Este espacio es para que ingreses una breve descripción de tu nuevo proyecto.";

   const crearContenidoNuevoProyecto = () => {
      props.registrarProyecto({
         titulo,
         descripcion,
         privacidad: !esPublico,
         estado: "En progreso",
         fechaCreacion: obtenerFechaActual(),
         categoria,
      });

      terminarRegistroNuevoProyecto();
   };

   const terminarRegistroNuevoProyecto = () => {
      setNombreClaseContenedor(nombreClaseContenedor.concat(" remover"));
      setTimeout(() => {
         props.terminarRegistroNuevoProyecto();
      }, 1500);
   };

   return ReactDOM.createPortal(
      <div className="contenedor-modal-nuevo-proyecto">
         <div className={nombreClaseContenedor}>
            <h5>Nuevo Proyecto</h5>
            <div className="modal-nuevo-proyecto-formulario">
               <label
                  className="modal-nuevo-proyecto-formulario-etiqueta"
                  htmlFor="edicion-titulo-proyecto"
               >
                  Título del proyecto:
               </label>
               <input
                  className="modal-nuevo-proyecto-formulario-texto"
                  id="edicion-titulo-proyecto"
                  placeholder="Espacio para ingresar el título de tu proyecto."
                  value={titulo}
                  onChange={(e) => {
                     setTitulo(e.currentTarget.value);
                  }}
                  maxLength="45"
                  required
               />
               <label
                  className="modal-nuevo-proyecto-formulario-etiqueta"
                  htmlFor="edicion-categoria-proyecto"
               >
                  Categoría
               </label>
               <input
                  className="modal-nuevo-proyecto-formulario-texto"
                  id="edicion-categoria-proyecto"
                  placeholder="Espacio para ingresar una nueva categoría."
                  value={categoria}
                  onChange={(e) => {
                     setCategoria(e.currentTarget.value);
                  }}
                  maxLength="45"
                  required
               ></input>
               <select
                  className="modal-nuevo-proyecto-formulario-selector"
                  value={categoria}
                  onChange={(e) => setCategoria(e.currentTarget.value)}
               >
                  <option key={`catpred`} value={categoria}>
                     {categoria}
                  </option>
                  {props.categorias.map((categoria, indice) => (
                     <option key={`cat${indice}`} value={categoria}>
                        {categoria}
                     </option>
                  ))}
               </select>
               <label
                  className="modal-nuevo-proyecto-formulario-etiqueta"
                  htmlFor="edicion-descripcion-proyecto"
               >
                  Descripción del proyecto:
               </label>
               <textarea
                  className="modal-nuevo-proyecto-formulario-area-texto"
                  id="edicion-descripcion-proyecto"
                  rows="3"
                  name="entrada"
                  placeholder={INSTRUCCIONES_DESCRIPCION}
                  value={descripcion}
                  onChange={(e) => {
                     setDescripcion(e.currentTarget.value);
                  }}
                  maxLength="255"
                  required
               ></textarea>
               <label className="modal-nuevo-proyecto-formulario-etiqueta">
                  Privacidad:
               </label>

               <label className="modal-nuevo-proyecto-formulario-privacidad">
                  <input
                     className="modal-nuevo-proyecto-formulario-privacidad-caja-seleccion"
                     type="checkbox"
                     onChange={() => setEsPublico(!esPublico)}
                     defaultChecked={esPublico}
                  />
                  <span className="modal-nuevo-proyecto-formulario-privacidad-deslizador"></span>
                  {esPublico ? "Público" : "Privado"}
               </label>
            </div>

            <div>
               <button
                  className="modal-nuevo-proyecto-formulario-registrar"
                  onClick={crearContenidoNuevoProyecto}
               >
                  Continuar
               </button>
               <button
                  className="modal-nuevo-proyecto-formulario-cancelar"
                  onClick={terminarRegistroNuevoProyecto}
               >
                  Cancelar
               </button>
            </div>
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default ModalNuevoProyecto;
