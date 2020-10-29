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

  return (
    <div className="editor">
      <BarraHerramientas />
      <div
        className="editor-contenido"
        id="editor"
        contentEditable={true}
        data-placeholder="Contenido..."
        onPaste={(e) => pegarContenido(e)}
      ></div>
    </div>
  );
};

export default SeccionEditor;
