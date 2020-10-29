import React from "react";

import BarraHerramientas from "./BarraHerramientas.js";

import "./estilos/seccionEditor.scss";

const SeccionEditor = (props) => {
   const pegarContenido = (e) => {};

   return (
      <div className="editor">
         <BarraHerramientas />
         <div
            className="editor-contenido"
            contentEditable
            data-placeholder="Contenido..."
            onPaste={(e) => pegarContenido(e)}
         ></div>
      </div>
   );
};

export default SeccionEditor;
