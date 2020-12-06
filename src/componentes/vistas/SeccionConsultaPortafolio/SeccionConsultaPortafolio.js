import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContenedorDeProyectosPublicos from "./ContenedorDeProyectosPublicos.js";
import ContenedorBotonesPaginas from "../SeccionPortafolio/ContenedorBotonesPaginas.js";

import "./estilos/seccionConsultaPortafolio.scss";

const SeccionConsultaPortafolio = (props) => {
   const [estadoPrincipal, setEstadoPrincipal] = useState({
      proyectosPublicos: [],
      numeroTotalPaginas: 1,
   });
   const [numeroPagina, setNumeroPagina] = useState(0);

   const location = useLocation();

   const obtenerPortafolioUsuario = async () => {
      console.log(props.auth);
      const proyectos = await fetch(
         `http://localhost:8080/proyectos?correo=${location.correo}&numeroPagina=${numeroPagina}`,
         {
            Authorization: props.auth,
            "Content-Type": "application/json",
         }
      ).then((respuesta) => respuesta.json());

      const consultaNumeroPaginas = await fetch(
         `http://localhost:8080/proyectos/paginas?idUsuario=${proyectos[0].idUsuario}`
      ).then((respuesta) => respuesta.json());

      const listaProyectos = proyectos.map((proyecto) => {
         const {
            id,
            titulo,
            descripcion,
            estado,
            fechaCreacion,
            categoria,
         } = proyecto;
         return {
            id,
            titulo,
            descripcion,
            estado,
            fechaCreacion,
            categoria,
         };
      });

      const nuevoEstadoPrincipal = {
         proyectosPublicos: listaProyectos,
         numeroTotalPaginas: consultaNumeroPaginas.numeroPaginas,
      };

      setEstadoPrincipal(nuevoEstadoPrincipal);
   };

   const actualizarNumeroPagina = (nuevoNumeroPagina) => {
      if (nuevoNumeroPagina !== numeroPagina) {
         setNumeroPagina(nuevoNumeroPagina);
      }
   };

   useEffect(() => {
      obtenerPortafolioUsuario();
   });

   return (
      <div className="seccion-consulta-portafolio">
         <label>
            <h5 className="seccion-consulta-portafolio-etiqueta">Portafolio</h5>
         </label>
         <div className="seccion-consulta-portafolio-principal">
            <ContenedorDeProyectosPublicos
               proyectos={estadoPrincipal.proyectosPublicos}
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

export default SeccionConsultaPortafolio;
