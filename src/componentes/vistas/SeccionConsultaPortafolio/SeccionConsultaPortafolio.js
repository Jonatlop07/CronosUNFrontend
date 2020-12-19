import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContenedorDeProyectosPublicos from "./ContenedorDeProyectosPublicos.js";
import ContenedorBotonesPaginas from "../SeccionPortafolio/ContenedorBotonesPaginas.js";

import "./estilos/seccionConsultaPortafolio.scss";

const SeccionConsultaPortafolio = (props) => {
   const api = props.auth.api;
   const usuario = props.auth.usuario;

   const [estadoPrincipal, setEstadoPrincipal] = useState({
      proyectosPublicos: [],
      numeroTotalPaginas: 1,
   });
   const [numeroPagina, setNumeroPagina] = useState(0);

   const location = useLocation();

   const obtenerPortafolioUsuario = async () => {
      const respuesta = await api.obtenerPortafolioUsuario(usuario.id, {
         correo: location.correo,
         numeroPagina,
         tamanioPagina: 10,
      });
      if (respuesta.ok) {
         const { numeroPaginas, proyectos } = await respuesta.json();
         const proyectosPublicos = proyectos.map((proyecto) => {
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
            proyectosPublicos,
            numeroTotalPaginas: numeroPaginas,
         };

         setEstadoPrincipal(nuevoEstadoPrincipal);
      } else {
      }
   };

   const actualizarNumeroPagina = (nuevoNumeroPagina) => {
      if (nuevoNumeroPagina !== numeroPagina) {
         setNumeroPagina(nuevoNumeroPagina);
      }
   };

   useEffect(() => {
      obtenerPortafolioUsuario();
   }, []);

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
