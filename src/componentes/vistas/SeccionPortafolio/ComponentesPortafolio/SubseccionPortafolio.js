import React, { useState, useEffect } from "react";

import PanelOpcionesPortafolio from "./PanelOpcionesPortafolio.js";
import ContenedorDeProyectos from "./ContenedorDeProyectos.js";
import ContenedorBotonesPaginas from "../ContenedorBotonesPaginas.js";

const SubseccionPortafolio = (props) => {
   const usuario = props.auth.usuario;
   const api = props.auth.api;

   const [estadoPrincipal, setEstadoPrincipal] = useState({
      proyectos: [],
      categorias: [],
      numeroTotalPaginas: 1,
      parametrosFiltro: {},
   });
   const [numeroPagina, setNumeroPagina] = useState(0);

   const obtenerProyectos = async (parametrosFiltro) => {
      let proyectos = [],
         numeroTotalPaginas = 0,
         categorias = [];
      const respuestaProyectos = await api.obtenerProyectos(
         usuario.id,
         parametrosFiltro
      );

      if (respuestaProyectos.ok) {
         const contenidoRespuesta = await respuestaProyectos.json();
         numeroTotalPaginas = contenidoRespuesta.numeroPaginas;

         proyectos = contenidoRespuesta.proyectos.map((proyecto) => {
            const {
               id,
               titulo,
               descripcion,
               estado,
               privacidad,
               fechaCreacion,
               categoria,
            } = proyecto;
            return {
               id,
               titulo,
               descripcion,
               estado,
               privacidad,
               fechaCreacion,
               categoria,
            };
         });
      } else {
      }

      const respuestaCategorias = await api.obtenerCategorias(usuario.id);

      if (respuestaCategorias.ok) {
         categorias = await respuestaCategorias.json();
      } else {
      }

      const nuevoEstadoPrincipal = {
         proyectos,
         categorias,
         numeroTotalPaginas,
         parametrosFiltro,
      };

      setEstadoPrincipal(nuevoEstadoPrincipal);
   };

   useEffect(() => {
      obtenerProyectos(estadoPrincipal.parametrosFiltro);
   }, []);

   const actualizarNumeroPagina = (nuevoNumeroPagina) => {
      if (nuevoNumeroPagina !== numeroPagina) {
         setNumeroPagina(nuevoNumeroPagina);
      }
   };

   const registrarProyecto = async (proyecto) => {
      const respuesta = await api.registrarProyecto(usuario.id, proyecto);

      if (respuesta.ok) {
      } else {
      }

      obtenerProyectos(estadoPrincipal.parametrosFiltro);
   };

   const actualizarProyecto = async (idProyecto, cambios) => {
      const respuesta = await api.actualizarProyecto(usuario.id, {
         ...cambios,
         id: idProyecto,
      });

      if (respuesta.ok) {
      } else {
      }

      obtenerProyectos(estadoPrincipal.parametrosFiltro);
   };

   const filtrarProyectos = (nuevosParametrosFiltro) => {
      nuevosParametrosFiltro.numeroPagina = numeroPagina;
      obtenerProyectos(nuevosParametrosFiltro);
   };

   const eliminarProyecto = async (idProyecto) => {
      const respuesta = await api.eliminarProyecto(usuario.id, idProyecto);

      if (respuesta.ok) {
      } else {
      }

      obtenerProyectos(estadoPrincipal.parametrosFiltro);
   };

   return (
      <div className="subseccion-portafolio">
         <label>
            <h5 className="subseccion-portafolio-nombre">Tu Portafolio</h5>
         </label>
         <div className="subseccion-portafolio-principal">
            <PanelOpcionesPortafolio
               categorias={estadoPrincipal.categorias}
               registrarProyecto={registrarProyecto}
               filtrarProyectos={filtrarProyectos}
            />
            <ContenedorDeProyectos
               proyectos={estadoPrincipal.proyectos}
               actualizarProyecto={actualizarProyecto}
               eliminarProyecto={eliminarProyecto}
            />
            <ContenedorBotonesPaginas
               numeroPagina={numeroPagina}
               actualizarNumeroPagina={actualizarNumeroPagina}
               numeroTotalPaginas={estadoPrincipal.numeroTotalPaginas}
            />
         </div>
      </div>
   );
};

export default SubseccionPortafolio;
