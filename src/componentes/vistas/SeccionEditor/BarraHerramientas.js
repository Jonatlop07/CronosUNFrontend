import React, { useState } from "react";

import { tiposFuente } from "./tiposFuente.js";

const BarraHerramientas = (props) => {
   const COLOR_BLANCO = "#ffffff";
   const COLOR_NEGRO = "#000000";
   const FUENTE_PREDETERMINADA = "Arial";
   const TAMANIO_FUENTE_PREDETERMINADO = "1";

   const [colorFuente, setColorFuente] = useState(COLOR_NEGRO);
   const [colorFondo, setColorFondo] = useState(COLOR_BLANCO);
   const [url, setUrl] = useState("");
   const [editandoUrl, setEditandoUrl] = useState(false);

   const formatear = (comando, value) => {
      document.execCommand(comando, false, value);
   };

   const agregarEnlace = () => {
      setEditandoUrl(!editandoUrl);
   };

   const establecerURL = (e) => {
      e.preventDefault();
      const texto = document.getSelection();
      formatear("insertHTML", `<a href='${url}' target='_blank'>${texto}</a>`);
      setUrl("");
      setEditandoUrl(false);
   };

   const agregarBloqueCodigo = () => {
      const bloqueCodigo = document.createElement("pre");
      const objetivo = document.getSelection();

      if (
         objetivo.focusNode.nodeName.includes("#text") ||
         objetivo.focusNode.className.includes("bloqueCodigo")
      ) {
         return;
      }
      const id = `bloqueCodigo-${
         document.getElementsByClassName("bloqueCodigo").length + 1
      }`;
      bloqueCodigo.classList.add("bloqueCodigo");

      formatear(
         "insertHTML",
         `<pre class='bloqueCodigo' id='${id}'>${objetivo}</pre>`
      );
      agregarLineaDespuesDeBloque(id);
   };

   const agregarLineaDespuesDeBloque = (id) => {
      const bloque = document.getElementById(`${id}`);
      const div = document.createElement("div");
      const br = document.createElement("br");
      div.appendChild(br);

      if (!bloque) {
         return;
      } else {
         bloque.after(div);
      }
   };

   return (
      <div className="editor-barra-herramientas">
         <div className="editor-barra-herramientas-separador">
            <div className="editor-barra-herramientas-separador-componente">
               <select
                  onChange={(e) => {
                     document.execCommand("styleWithCSS", false, true);
                     document.execCommand(
                        "fontName",
                        false,
                        e.currentTarget.value
                     );
                  }}
               >
                  {tiposFuente.map((tipoFuente, indice) => (
                     <option key={`tp${indice}`} value={tipoFuente}>
                        {tipoFuente}
                     </option>
                  ))}
               </select>

               <select
                  className="editor-barra-herramientas-tamanio"
                  onChange={(e) => {
                     formatear("fontSize", e.currentTarget.value);
                  }}
               >
                  <option>--predeterminado</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
               </select>

               <select
                  className="editor-barra-herramientas-tamanio"
                  onChange={(e) => {
                     formatear("formatBlock", e.currentTarget.value);
                  }}
               >
                  <option
                     className="editor-barra-herramientas-tamanio-encabezado-1"
                     value="h1"
                  >
                     Encabezado 1
                  </option>
                  <option
                     className="editor-barra-herramientas-tamanio-encabezado-2"
                     value="h2"
                  >
                     Encabezado 2
                  </option>
                  <option
                     className="editor-barra-herramientas-tamanio-encabezado-3"
                     value="h3"
                  >
                     Encabezado 3
                  </option>
                  <option
                     className="editor-barra-herramientas-tamanio-encabezado-4"
                     value="h4"
                  >
                     Encabezado 4
                  </option>
                  <option
                     className="editor-barra-herramientas-tamanio-encabezado-5"
                     value="h5"
                  >
                     Encabezado 5
                  </option>
                  <option
                     className="editor-barra-herramientas-tamanio-encabezado-6"
                     value="h6"
                  >
                     Encabezado 6
                  </option>
                  <option
                     className="editor-barra-herramientas-tamanio-parrafo"
                     value="p"
                  >
                     Párrafo
                  </option>
               </select>
            </div>
            <div className="editor-barra-herramientas-separador-componente">
               <button
                  className="fas fa-undo"
                  onClick={(e) => formatear("undo")}
               ></button>
               <button
                  className="fas fa-undo redo"
                  onClick={(e) => formatear("redo")}
               ></button>

               <button
                  className="fas fa-bold"
                  onClick={(e) => formatear("bold")}
               ></button>
               <button
                  className="fas fa-italic"
                  onClick={(e) => formatear("italic")}
               ></button>
               <button
                  className="fas fa-underline"
                  onClick={(e) => formatear("underline")}
               ></button>
               <button
                  className="fas fa-font"
                  onClick={(e) => formatear("foreColor", colorFuente)}
               ></button>
               <input
                  type="color"
                  className="editor-barra-herramientas-seleccion-color"
                  value={colorFuente}
                  onChange={(e) => setColorFuente(e.currentTarget.value)}
               />
               <button
                  className="fas fa-paint-brush"
                  onClick={(e) => formatear("backColor", colorFondo)}
               ></button>
               <input
                  type="color"
                  className="editor-barra-herramientas-seleccion-color"
                  value={colorFondo}
                  onChange={(e) => setColorFondo(e.currentTarget.value)}
               />
            </div>
         </div>
         <div className="editor-barra-herramientas-separador-opciones">
            <button
               className="fas fa-align-left"
               onClick={(e) => formatear("justifyLeft")}
            ></button>
            <button
               className="fas fa-align-center"
               onClick={(e) => formatear("justifyCenter")}
            ></button>
            <button
               className="fas fa-align-right"
               onClick={(e) => formatear("justifyRight")}
            ></button>
            <button
               className="fas fa-align-justify"
               onClick={(e) => formatear("justifyFull")}
            ></button>
            <button
               className="fas fa-subscript"
               onClick={(e) => formatear("subscript")}
            ></button>
            <button
               className="fas fa-superscript"
               onClick={(e) => formatear("superscript")}
            ></button>
            <button
               className="fas fa-list-ul"
               onClick={(e) => formatear("insertUnorderedList")}
            ></button>
            <button
               className="fas fa-list-ol"
               onClick={(e) => formatear("insertOrderedList")}
            ></button>
            <button
               className="fas fa-indent"
               onClick={(e) => formatear("indent")}
            ></button>
            <button
               className="fas fa-outdent"
               onClick={(e) => formatear("outdent")}
            ></button>
            <button className="fas fa-image"></button>
            <button
               className="fas fa-code"
               onClick={(e) => agregarBloqueCodigo()}
            ></button>
            <button
               className="fas fa-link"
               onClick={(e) => agregarEnlace()}
            ></button>
            {editandoUrl && (
               <div id="url-input" className="editor-barra-herramientas-url">
                  <input
                     id="txtFormatUrl"
                     className="editor-barra-herramientas-url-campo"
                     placeholder="url"
                     value={url}
                     onChange={(e) => setUrl(e.currentTarget.value)}
                  />
                  <button
                     className="editor-barra-herramientas-url-btn"
                     onClick={(e) => establecerURL(e)}
                  >
                     Crear un Enlace
                  </button>
               </div>
            )}

            <button
               className="fas fa-eraser"
               onClick={(e) => formatear("removeFormat")}
            ></button>
         </div>
      </div>
   );
};

export default BarraHerramientas;
