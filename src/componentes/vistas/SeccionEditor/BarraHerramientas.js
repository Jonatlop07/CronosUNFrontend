import React from "react";

const BarraHerramientas = (props) => {
  const formatear = (comando, value) => {
    document.execCommand(comando, false, value);
  };

  return (
    <div className="editor-barra-herramientas">
      <select>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
        <option value="Georgia">Georgia</option>
      </select>
      <select>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
        <option value="12px">12pt</option>
      </select>

      <button
        className="fas fa-undo"
        onClick={(e) => formatear("undo")}
      ></button>
      <button
        className="fab fa-undo redo"
        onClick={(e) => formatear("redo")}
      ></button>
      <button
        className="fas fa-bold"
        onClick={(e) => formatear("bold")}
      ></button>
      <button className="fas fa-italic" onClick={(e) => formatear("italic")}>
        {" "}
      </button>
      <button
        className="fas fa-underline"
        onClick={(e) => formatear("underline")}
      ></button>
      <button className="fas fa-font"></button>
      <button className="fas fa-paint-brush"></button>
      <button
        className="fas fa-subscript"
        onClick={(e) => formatear("subscript")}
      ></button>
      <button
        className="fas fa-superscript"
        onClick={(e) => formatear("superscript")}
      ></button>
      <button className="fas fa-image"></button>
      <button className="fas fa-code"></button>
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
        className="fas fa-list-ul"
        onClick={(e) => formatear("insertUnorderedList")}
      ></button>
      <button
        className="fas fa-list-ol"
        onClick={(e) => formatear("")}
      ></button>
      <button
        className="fas fa-indent"
        onClick={(e) => formatear("indent")}
      ></button>
      <button
        className="fas fa-outdent"
        onClick={(e) => formatear("outdent")}
      ></button>
      <button
        className="fas fa-eraser"
        onClick={(e) => formatear("removeFormat")}
      ></button>
      <select>
        <option value="paragraph">Párrafo</option>
      </select>
    </div>
  );
};

export default BarraHerramientas;
