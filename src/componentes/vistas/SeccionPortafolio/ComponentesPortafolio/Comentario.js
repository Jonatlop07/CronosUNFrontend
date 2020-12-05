import React, { useState } from "react";

const Comentario = ({ nombreUsuario, fecha, hora, contenido }) => {
   return (
      <article className="comentario">
         <p className="comentario-informacion">
            <span className="comentario-informacion-nombre-usuario">
               {nombreUsuario}
            </span>
            |
            <time className="comentario-informacion-fecha">
               {fecha} | {hora}
            </time>
         </p>
         <p className="comentario-contenido">{contenido}</p>
      </article>
   );
};

export default Comentario;
