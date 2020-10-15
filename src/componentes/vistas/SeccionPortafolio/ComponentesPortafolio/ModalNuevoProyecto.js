import React, { useState } from "react";

import "./estilos/modalNuevoProyecto.scss";

const ModalNuevoProyecto = (props) => {
   const [esPublico, setEsPublico] = useState(false);

   const manejarSeleccionPrivacidad = () => {
      setEsPublico(!esPublico);
   };

   const crearContenidoNuevoProyecto = () => {};

   const terminarRegistroNuevoProyecto = () => {
      props.terminarRegistroNuevoProyecto();
   };

   return (
      <div>
         <h5>Nuevo Proyecto</h5>
         <fieldset>
            <label for="edicion-titulo-proyecto">Título del proyecto:</label>
            <input id="edicion-titulo-proyecto" />
            <label for="edicion-descripcion-proyecto">
               Descripción del proyecto:
            </label>
            <input id="edicion-descripcion-proyecto" />
            <label>Privacidad:</label>
            <label>{esPublico ? "Público" : "Privado"}</label>
            <label className="switch">
               <input
                  type="checkbox"
                  onChange={manejarSeleccionPrivacidad}
                  defaultChecked={esPublico}
               />
               <span className="slider round"></span>
            </label>
         </fieldset>

         <button onClick={crearContenidoNuevoProyecto}>Continuar</button>
         <button onClick={terminarRegistroNuevoProyecto}>Cancelar</button>
      </div>
   );
};

export default ModalNuevoProyecto;
