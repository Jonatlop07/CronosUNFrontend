import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import SubseccionComentarios from "./SubseccionComentarios";

import {
   obtenerFechaActual,
   obtenerHoraActual,
} from "../../../../utilidad/funcionesFechaYHora.js";

import "./estilos/visualizacionProyecto.scss";

const VisualizacionProyecto = (props) => {
   const usuario = props.auth.usuario;
   const api = props.auth.api;
   const location = useLocation();

   const [estadoPrincipal, setEstadoPrincipal] = useState({
      contenidoProyecto: {},
      comentariosProyecto: [],
   });

   const obtenerProyectoYComentarios = async () => {
      const idProyecto = await location.idProyecto;

      const respuestaProyecto = await api.consultarProyecto(
         usuario.id,
         idProyecto
      );

      if (respuestaProyecto.ok) {
         const proyecto = await respuestaProyecto.json();
         const { titulo, fechaCreacion, categoria, contenido } = proyecto;

         const respuestaComentarios = await api.obtenerComentarios(
            idProyecto,
            usuario.id
         );

         if (respuestaComentarios.ok) {
            const comentarios = await respuestaComentarios.json();

            const comentariosProyecto = comentarios.map((comentario) => ({
               id: comentario.id,
               nombreUsuario: comentario.nombreUsuario,
               fecha: comentario.fecha,
               hora: comentario.hora,
               contenido: comentario.contenido,
            }));

            setEstadoPrincipal((anteriorEstadoPrincipal) => ({
               contenidoProyecto: {
                  titulo,
                  fechaCreacion,
                  categoria,
                  contenido,
               },
               comentariosProyecto,
            }));
         } else {
            setEstadoPrincipal((anteriorEstadoPrincipal) => ({
               ...anteriorEstadoPrincipal,
               contenidoProyecto: {
                  titulo,
                  fechaCreacion,
                  categoria,
                  contenido,
               },
            }));
         }
      } else {
         console.log(respuestaProyecto);
      }
   };

   const registrarComentario = async (nuevoComentario) => {
      const idProyecto = await location.idProyecto;

      const respuesta = await api.registrarComentario(usuario.id, {
         idProyecto,
         contenido: nuevoComentario,
         fecha: obtenerFechaActual(),
         hora: `${obtenerHoraActual()}:00`,
      });

      if (respuesta.ok) {
         obtenerProyectoYComentarios();
      } else {
      }
   };

   useEffect(() => {
      obtenerProyectoYComentarios();
   }, []);

   return (
      <div className="visualizacion-proyecto">
         <h1 className="visualizacion-proyecto-titulo">
            {estadoPrincipal.contenidoProyecto.titulo}
         </h1>
         <div className="visualizacion-proyecto-principal">
            <time className="visualizacion-proyecto-principal-fecha">
               Creado el: {estadoPrincipal.contenidoProyecto.fechaCreacion}
            </time>
            <p className="visualizacion-proyecto-principal-categoria">
               Categoria: {estadoPrincipal.contenidoProyecto.categoria}
            </p>
            <div className="visualizacion-proyecto-principal-contenido">
               {ReactHtmlParser(estadoPrincipal.contenidoProyecto.contenido)}
            </div>
         </div>
         <SubseccionComentarios
            comentarios={estadoPrincipal.comentariosProyecto}
            registrarComentarioProyecto={registrarComentario}
         />
      </div>
   );
};

export default VisualizacionProyecto;
