import React, { useState, useEffect } from "react";

import PanelOpcionesPortafolio from "./PanelOpcionesPortafolio.js";
import ContenedorDeProyectos from "./ContenedorDeProyectos.js";
import ContenedorBotonesPaginas from "../ContenedorBotonesPaginas.js";

const SubseccionPortafolio = (props) => {
   const [estadoPrincipal, setEstadoPrincipal] = useState({
      listaProyectos: [],
      categorias: [],
      numeroTotalPaginas: 1,
      parametrosFiltro: { idUsuario: props.idUsuario },
   });
   const [numeroPagina, setNumeroPagina] = useState(0);

   const obtenerProyectos = async (parametrosFiltro) => {
      const categorias = await fetch(
         `http://localhost:8080/proyectos/categorias/${props.idUsuario}`,
         {
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
         }
      ).then((respuesta) => respuesta.json());

      const proyectos = await fetch(`http://localhost:8080/proyectos`, {
         method: "POST",
         headers: {
            Authorization: props.auth,
            "Content-Type": "application/json",
         },
         body: JSON.stringify(parametrosFiltro),
      }).then((respuesta) => respuesta.json());

      const consultaNumeroPaginas = await fetch(
         `http://localhost:8080/proyectos/paginas?idUsuario=${props.idUsuario}`,
         {
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
         }
      ).then((respuesta) => respuesta.json());

      const listaProyectos = proyectos.map((proyecto) => {
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

      const nuevoEstadoPrincipal = {
         listaProyectos,
         categorias: categorias,
         numeroTotalPaginas: consultaNumeroPaginas.numeroPaginas,
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
      console.log(proyecto);
      const respuesta = await fetch(
         `http://localhost:8080/proyectos/registro`,
         {
            method: "POST",
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...proyecto,
               idUsuario: props.idUsuario,
            }),
         }
      );

      obtenerProyectos(estadoPrincipal.parametrosFiltro);
   };

   const actualizarProyecto = async (idProyecto, cambios) => {
      const respuesta = await fetch(
         `http://localhost:8080/proyectos/actualizacion/${idProyecto}`,
         {
            method: "PUT",
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...cambios,
               idUsuario: props.idUsuario,
            }),
         }
      ).catch((err) => console.log(err));

      obtenerProyectos(estadoPrincipal.parametrosFiltro);
   };

   const filtrarProyectos = (nuevosParametrosFiltro) => {
      console.log(nuevosParametrosFiltro);
      nuevosParametrosFiltro.idUsuario = props.idUsuario;
      nuevosParametrosFiltro.numeroPagina = numeroPagina;
      obtenerProyectos(nuevosParametrosFiltro);
   };

   const eliminarProyecto = async (idProyecto) => {
      const respuesta = await fetch(
         `http://localhost:8080/proyectos/${idProyecto}`,
         {
            method: "DELETE",
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               idUsuario: props.idUsuario,
            }),
         }
      );

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
               proyectos={estadoPrincipal.listaProyectos}
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
