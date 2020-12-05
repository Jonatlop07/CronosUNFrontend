import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { RUTA_SEC_PROYECTOS_PUBLICOS } from "../../../utilidad/rutas.js";

const BarraBusqueda = (props) => {
   const [correo, setCorreo] = useState("");

   const history = useHistory();

   const buscarUsuario = (e) => {
      e.preventDefault();
      history.push({
         pathname: RUTA_SEC_PROYECTOS_PUBLICOS,
         correo,
      });
   };

   return (
      <div className="barra-busqueda">
         <form className="barra-busqueda-formulario">
            <input
               className="barra-busqueda-campo"
               placeholder="Nombre o correo de usuario"
               value={correo}
               onChange={(e) => setCorreo(e.currentTarget.value)}
               required
            />
            <button
               type="submit"
               className="barra-busqueda-boton"
               onClick={buscarUsuario}
            >
               <i className="fas fa-search"></i> Buscar
            </button>
         </form>
      </div>
   );
};

export default BarraBusqueda;
