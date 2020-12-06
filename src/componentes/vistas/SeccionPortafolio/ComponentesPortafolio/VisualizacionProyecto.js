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
  const location = useLocation();
  const [estadoPrincipal, setEstadoPrincipal] = useState({
    contenidoProyecto: {},
    comentariosProyecto: [],
  });

  const obtenerProyectoYComentarios = (async () => {
    const idProyecto = await location.idProyecto;

    const proyecto = await fetch(
      `http://localhost:8080/proyectos/${idProyecto}`,
      {
        headers: {
          Authorization: props.auth,
          "Content-Type": "application/json",
        },
      }
    )
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error));

    const comentarios = await fetch(
      `http://localhost:8080/proyectos/comentarios?idProyecto=${idProyecto}`,
      {
        headers: {
          Authorization: props.auth,
          "Content-Type": "application/json",
        },
      }
    )
      .then((respuesta) => respuesta.json())
      .catch((err) => console.log(err));

    const { titulo, fechaCreacion, categoria, contenido } = proyecto;

    const comentariosProyecto = comentarios.map((comentario) => ({
      id: comentario.id,
      nombreUsuario: comentario.nombreUsuario,
      fecha: comentario.fecha,
      hora: comentario.hora,
      contenido: comentario.contenido,
    }));

    const nuevoEstadoPrincipal = {
      contenidoProyecto: {
        titulo,
        fechaCreacion,
        categoria,
        contenido,
      },
      comentariosProyecto,
    };

    setEstadoPrincipal(nuevoEstadoPrincipal);
  });

  const registrarComentario = async (nuevoComentario) => {
    const idProyecto = await location.idProyecto;

    await fetch(`http://localhost:8080/proyectos/comentarios/registro`, {
      method: "POST",
      headers: {
        Authorization: props.auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuario: 2,
        idProyecto,
        contenido: nuevoComentario,
        fecha: obtenerFechaActual(),
        hora: `${obtenerHoraActual()}:00`,
      }),
    });
    obtenerProyectoYComentarios();
  };

  useEffect(() => {
    obtenerProyectoYComentarios();
  }, [obtenerProyectoYComentarios]);

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
