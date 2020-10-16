import React, { useState } from "react";

import Proyecto from "./Proyecto.js";

import "./estilos/contenedorDeProyectos.scss";

const proyectos = [
   {
      titulo: "Mi proyecto1",
      descripcion:
         "Both ideas have implications over the teaching process and as the author wants to highlight his own method, he uses different advantage of both ideas to explain his own.",
   },
   {
      titulo: "Mi proyecto 2",
      descripcion:
         "The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill",
   },
   {
      titulo: "Mi proyecto 3",
      descripcion:
         "Both ideas have implications over the teaching process and as the author wants to highlight his own method, he uses different advantage of both ideas to explain his own. Doing it, the author clarifies that even if the book is directed to all draftsmen his main focus is on animation drawing.",
   },
   {
      titulo: "Mi proyecto 4",
      descripcion:
         "The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill Evans recorded in Paris (in a quartet format) at 1959. The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill Evans recorded in Paris (in a quartet format) at 1959.",
   },
];

const ContenedorDeProyectos = (props) => {
   return (
      <div className="contenedor-proyectos">
         <div className="contenedor-proyectos-principal">
            {proyectos.map((proyecto, indice) => (
               <Proyecto
                  titulo={proyecto.titulo}
                  descripcion={proyecto.descripcion}
               />
            ))}
         </div>
      </div>
   );
};

export default ContenedorDeProyectos;
