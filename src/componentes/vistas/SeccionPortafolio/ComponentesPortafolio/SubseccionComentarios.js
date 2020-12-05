import React, { useState } from "react";
import PropTypes from "prop-types";

import Comentario from "./Comentario.js";

const SubseccionComentarios = ({
   comentarios,
   registrarComentarioProyecto,
}) => {
   const [nuevoComentario, setNuevoComentario] = useState("");

   const registrarComentario = () => {
      registrarComentarioProyecto(nuevoComentario);
      setNuevoComentario("");
   };

   return (
      <div className="subseccion-comentarios">
         <label className="subseccion-comentarios-titulo">
            <h5>Comentarios:</h5>
         </label>
         <div className="subseccion-comentarios-nuevo">
            <input
               className="subseccion-comentarios-nuevo-texto"
               value={nuevoComentario}
               placeholder="Nuevo comentario..."
               onChange={(e) => setNuevoComentario(e.currentTarget.value)}
            />
            <button
               className="subseccion-comentarios-nuevo-envio"
               onClick={registrarComentario}
            >
               Enviar
            </button>
         </div>

         {comentarios &&
            comentarios.map((comentario, indice) => {
               const { id, nombreUsuario, fecha, hora, contenido } = comentario;
               return (
                  <Comentario
                     key={`comentario${indice}`}
                     id={id}
                     nombreUsuario={nombreUsuario}
                     fecha={fecha}
                     hora={hora}
                     contenido={contenido}
                  />
               );
            })}
      </div>
   );
};

SubseccionComentarios.propTypes = {
   comentarios: PropTypes.array.isRequired,
};

SubseccionComentarios.defaultProps = {
   comentarios: [],
};

export default SubseccionComentarios;
