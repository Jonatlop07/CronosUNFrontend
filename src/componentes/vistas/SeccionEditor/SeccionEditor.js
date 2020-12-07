import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import BarraHerramientas from "./BarraHerramientas.js";

import { obtenerFechaActual } from "../../../utilidad/funcionesFechaYHora.js";

import "./estilos/seccionEditor.scss";

const SeccionEditor = (props) => {
   const [informacionProyecto, setInformacionProyecto] = useState({});
   const [categorias, setCategorias] = useState([]);
   const location = useLocation();

   const obtenerProyecto = async () => {
      const idProyecto = location.idProyecto;
      if (idProyecto) {
         const proyecto = await fetch(
            `http://localhost:8080/proyectos/${idProyecto}`,
            {
               headers: {
                  Authorization: props.auth,
                  "Content-Type": "application/json",
               },
            }
         ).then((respuesta) => respuesta.json());

         const {
            id,
            titulo,
            descripcion,
            categoria,
            contenido,
            estado,
            privacidad,
            fechaCreacion,
            fechaFinalizacion,
         } = proyecto;

         if (document.getElementById("editor") && contenido) {
            document.getElementById("editor").innerHTML = contenido;
         }

         setInformacionProyecto({
            id,
            titulo,
            descripcion,
            categoria,
            contenido,
            estado,
            privacidad,
            fechaCreacion,
            fechaFinalizacion,
         });
      }
   };

   const obtenerCategorias = async () => {
      const categorias = await fetch(
         `http://localhost:8080/proyectos/categorias/${props.idUsuario}`,
         {
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
         }
      ).then((respuesta) => respuesta.json());

      setCategorias(categorias);
   };

   useEffect(() => {
      obtenerProyecto();
   }, []);

   useEffect(() => {
      obtenerCategorias();
   }, []);

   const pegarContenido = (e) => {
      e.preventDefault();
      const apertura = new RegExp("<", "gi");
      const cierre = new RegExp(">", "gi");
      const texto = (e.originalEvent || e).clipboardData
         .getData("text/plain")
         .replace(apertura, "&lt")
         .replace(cierre, "&gt");
      document.execCommand("insertHTML", false, texto);
   };

   const manejarCambioParametros = (evento) => {
      const { name, value } = evento.currentTarget;

      if (name === "estado") {
         if (
            informacionProyecto.estado !== "Finalizado" &&
            value === "Finalizado"
         ) {
            setInformacionProyecto((anteriorEstado) => ({
               ...anteriorEstado,
               [name]: value,
               fechaFinalizacion: obtenerFechaActual(),
            }));
         }
      } else {
         setInformacionProyecto((anteriorEstado) => ({
            ...anteriorEstado,
            [name]: value,
         }));
      }
   };

   const guardar = async () => {
      const {
         id,
         titulo,
         descripcion,
         categoria,
         estado,
         privacidad,
         fechaCreacion,
         fechaFinalizacion,
      } = informacionProyecto;

      console.log(id);

      const contenido = document.getElementById("editor").innerHTML;
      const respuesta = await fetch(
         `http://localhost:8080/proyectos/actualizacion`,
         {
            method: "PUT",
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               idUsuario: props.idUsuario,
               id,
               titulo,
               descripcion,
               categoria,
               estado,
               privacidad,
               contenido,
               fechaCreacion,
               fechaFinalizacion,
            }),
         }
      );
   };

   return (
      <div className="editor">
         <h5 className="editor-titulo">Edita tu proyecto</h5>
         <div className="informacion-proyecto">
            <label
               className="informacion-proyecto-etiqueta"
               htmlFor="edicion-titulo-proyecto"
            >
               Título del proyecto:
            </label>
            <input
               className="informacion-proyecto-texto"
               id="edicion-titulo-proyecto"
               value={informacionProyecto.titulo}
               onChange={manejarCambioParametros}
               maxLength="45"
               name="titulo"
            />
            <label
               className="informacion-proyecto-etiqueta"
               htmlFor="edicion-categoria-proyecto"
            >
               Categoría:
            </label>
            <input
               className="informacion-proyecto-texto"
               id="edicion-categoria-proyecto"
               value={informacionProyecto.categoria}
               onChange={manejarCambioParametros}
               maxLength="45"
               name="categoria"
            ></input>
            <select
               className="informacion-proyecto-selector"
               value={informacionProyecto.categoria}
               onChange={manejarCambioParametros}
               name="categoria"
            >
               <option key={`catpred`} value={informacionProyecto.categoria}>
                  {informacionProyecto.categoria}
               </option>
               {categorias.map((categoria, indice) => (
                  <option key={`cat${indice}`} value={categoria}>
                     {categoria}
                  </option>
               ))}
            </select>
            <label
               className="informacion-proyecto-etiqueta"
               htmlFor="edicion-descripcion-proyecto"
            >
               Descripción del proyecto:
            </label>
            <textarea
               className="informacion-proyecto-area-texto"
               id="edicion-descripcion-proyecto"
               rows="3"
               name="descripcion"
               value={informacionProyecto.descripcion || ""}
               onChange={manejarCambioParametros}
               maxLength="255"
            ></textarea>
            <label className="informacion-proyecto-etiqueta">Privacidad:</label>
            <label className="informacion-proyecto-privacidad">
               <input
                  className="informacion-proyecto-privacidad-caja-seleccion"
                  type="checkbox"
                  onChange={(e) =>
                     setInformacionProyecto((anteriorEstado) => ({
                        ...anteriorEstado,
                        privacidad: !anteriorEstado.privacidad,
                     }))
                  }
                  checked={informacionProyecto.privacidad}
               />
               <span className="informacion-proyecto-privacidad-deslizador"></span>
               <p className="informacion-proyecto-privacidad-etiqueta">
                  {informacionProyecto.privacidad ? "Privado" : "Público"}
               </p>
            </label>
            <label
               className="informacion-proyecto-etiqueta"
               htmlFor="edicion-estado-proyecto"
            >
               Estado:
            </label>
            <select
               id="edicion-estado-proyecto"
               className="informacion-proyecto-selector"
               value={informacionProyecto.estado}
               onChange={manejarCambioParametros}
               name="estado"
            >
               <option value={"En progreso"}>En progreso</option>
               <option value={"Finalizado"}>Finalizado</option>
               <option value={"Incompleto"}>Incompleto</option>
            </select>
            <label className="informacion-proyecto-etiqueta">Contenido:</label>
         </div>
         <BarraHerramientas />
         <div
            className="editor-contenido"
            id="editor"
            contentEditable={true}
            spellCheck={false}
            data-placeholder="Contenido..."
            onPaste={(e) => pegarContenido(e)}
         ></div>
         <button className="editor-guardar" onClick={(e) => guardar()}>
            Guardar
         </button>
      </div>
   );
};

export default SeccionEditor;
