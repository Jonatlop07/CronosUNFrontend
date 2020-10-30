import React from "react";

import BarraHerramientas from "./BarraHerramientas.js";

import "./estilos/seccionEditor.scss";

const SeccionEditor = (props) => {
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

   const guardar = () => {
      const contenido = document.getElementById("editor").innerHTML;
      console.log(contenido);
      // esta parte toca terminarla con la base de datos ( debe guardar "Publicacion" en la BD)
   };

   return (
      <div className="editor">
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
