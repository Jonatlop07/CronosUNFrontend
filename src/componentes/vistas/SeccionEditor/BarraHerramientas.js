import React from "react";

const BarraHerramientas = (props) => {
   return (
      <div className="editor-barra-herramientas">
         <select>
            <option value="Georgia">Georgia</option>
         </select>
         <select>
            <option value="12px">12pt</option>
         </select>
         <i className="fas fa-bold" />
         <i className="fas fa-italic" />
         <i className="fas fa-underline" />
         <i className="fas fa-font" />
         <i className="fas fa-paint-brush" />
         <i className="fas fa-subscript" />
         <i className="fas fa-superscript" />
         <i className="fas fa-image" />
         <i className="fas fa-code" />
         <i className="fas fa-align-left" />
         <i className="fas fa-align-center" />
         <i className="fas fa-align-right" />
         <i className="fas fa-align-justify" />
         <i className="fas fa-list-ul" />
         <i className="fas fa-list-ol" />
         <i className="fas fa-indent" />
         <i className="fas fa-outdent" />
         <i className="fas fa-eraser" />
         <select>
            <option value="paragraph">Párrafo</option>
         </select>
      </div>
   );
};

export default BarraHerramientas;
