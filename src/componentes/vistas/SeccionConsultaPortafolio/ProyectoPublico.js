import React from "react";
import { useHistory } from "react-router-dom";

import { RUTA_SEC_VISUALIZACION_PROYECTO } from "../../../utilidad/rutas.js";

const ProyectoPublico = ({ datos }) => {
   const history = useHistory();

   const consultarProyecto = (e) => {
      e.preventDefault();
      history.push({
         pathname: RUTA_SEC_VISUALIZACION_PROYECTO,
         idProyecto: datos.id,
      });
   };

   return (
      <section className="proyecto-publico">
         <h5 className="proyecto-publico-titulo" onClick={consultarProyecto}>
            {datos.titulo}
         </h5>
         <p className="proyecto-publico-descripcion">{datos.descripcion}</p>
         {datos.imagenFondo && (
            <figure
               className="proyecto-publico-imagen"
               style={{ backgroundImage: `url(${datos.imagenFondo})` }}
            >
               <img />
            </figure>
         )}
         <p>Estado: {datos.estado}</p>
      </section>
   );
};

export default ProyectoPublico;
