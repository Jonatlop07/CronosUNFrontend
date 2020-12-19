import React, { useState } from "react";

import ProyectoPublico from "./ProyectoPublico.js";

const ContenedorDeProyectosPublicos = ({ proyectos }) => {
   return (
      <div className="contenedor-proyectos-publicos">
         <div className="contenedor-proyectos-publicos-principal">
            {proyectos && proyectos.map((proyecto, indice) => (
               <ProyectoPublico
                  key={`proyecto_pub${indice}`}
                  datos={{
                     id: proyecto.id,
                     titulo: proyecto.titulo,
                     descripcion: proyecto.descripcion,
                     estado: proyecto.estado,
                     categoria: proyecto.categoria,
                     fechaCreacion: proyecto.fechaCreacion,
                  }}
               />
            ))}
         </div>
      </div>
   );
};

export default ContenedorDeProyectosPublicos;
