import React, { useState } from "react";

import Proyecto from "./Proyecto.js";

import "./estilos/contenedorDeProyectos.scss";

const proyectos = [
   {
      titulo: "Mi proyecto1",
      descripcion:
         "Both ideas have implications over the teaching process and as the author wants to highlight his own method, he uses different advantage of both ideas to explain his own.",
      imagenFondo:
         "https://cdn.stocksnap.io/img-thumbs/960w/green-leaves_G5TZZC8WB2.jpg",
   },
   {
      titulo: "Mi proyecto 2",
      descripcion:
         "The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill",
      imagenFondo:
         "https://images.pexels.com/photos/5327007/pexels-photo-5327007.jpeg?cs=srgb&dl=pexels-matt-hardy-5327007.jpg&fm=jpg",
   },
   {
      titulo: "Mi proyecto 3",
      descripcion:
         "Both ideas have implications over the teaching process and as the author wants to highlight his own method, he uses different advantage of both ideas to explain his own. Doing it, the author clarifies that even if the book is directed to all draftsmen his main focus is on animation drawing.",
      imagenFondo:
         "https://images.pexels.com/photos/5327007/pexels-photo-5327007.jpeg?cs=srgb&dl=pexels-matt-hardy-5327007.jpg&fm=jpg",
   },
   {
      titulo: "Mi proyecto 4",
      descripcion:
         "The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill Evans recorded in Paris (in a quartet format) at 1959. The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill Evans recorded in Paris (in a quartet format) at 1959.",
      imagenFondo:
         "https://cdn.stocksnap.io/img-thumbs/960w/green-leaves_G5TZZC8WB2.jpg",
   },
   {
      titulo: "Mi proyecto 5",
      descripcion:
         "The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill Evans recorded in Paris (in a quartet format) at 1959. The album The complete legendary sessions is the result of three sessions of collaboration between Chet Baker and Bill Evans recorded in Paris (in a quartet format) at 1959.",
      imagenFondo:
         "https://cdn.stocksnap.io/img-thumbs/960w/green-leaves_G5TZZC8WB2.jpg",
   },
   {
      titulo: "Mi proyecto 6",
      descripcion:
         "Both ideas have implications over the teaching process and as the author wants to highlight his own method, he uses different advantage of both ideas to explain his own. Doing it, the author clarifies that even if the book is directed to all draftsmen his main focus is on animation drawing.",
      imagenFondo:
         "https://images.pexels.com/photos/5327007/pexels-photo-5327007.jpeg?cs=srgb&dl=pexels-matt-hardy-5327007.jpg&fm=jpg",
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
                  imagenFondo={proyecto.imagenFondo}
                  key={`proy${indice}`}
               />
            ))}
         </div>
      </div>
   );
};

export default ContenedorDeProyectos;
