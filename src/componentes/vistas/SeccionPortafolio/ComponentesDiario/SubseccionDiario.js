import React, { useEffect, useState } from "react";

import PanelOpcionesDiario from "./PanelOpcionesDiario.js";
import ContenedorDiario from "./ContenedorDiario.js";
import ContenedorBotonesPaginas from "../ContenedorBotonesPaginas.js";

const SubseccionDiario = (props) => {
   const usuario = props.auth.usuario;
   const api = props.auth.api;

   const [estadoPrincipal, setEstadoPrincipal] = useState({
      entradasDiario: [],
      numeroPaginas: 1,
      parametrosFiltro: {},
   });
   const [numeroPagina, setNumeroPagina] = useState(0);

   const obtenerEntradasDiario = async (parametrosFiltro) => {
      const respuesta = await api.obtenerEntradasDiario(
         usuario.id,
         parametrosFiltro
      );

      if (respuesta.ok) {
         const { numeroPaginas, entradasDiario } = await respuesta.json();

         const nuevoEstadoPrincipal = {
            entradasDiario,
            numeroPaginas,
            parametrosFiltro,
         };

         setEstadoPrincipal(nuevoEstadoPrincipal);
      } else {
      }
   };

   useEffect(() => {
      obtenerEntradasDiario(estadoPrincipal.parametrosFiltro);
   }, []);

   const actualizarNumeroPagina = (nuevoNumeroPagina) => {
      if (nuevoNumeroPagina !== numeroPagina) {
         setNumeroPagina(nuevoNumeroPagina);
      }
   };

   const registrarEntradaDiario = async (nuevaEntradaDiario) => {
      const respuesta = await api.registrarEntradaDiario(
         usuario.id,
         nuevaEntradaDiario
      );

      if (respuesta.ok) {
         obtenerEntradasDiario(estadoPrincipal.parametrosFiltro);
      } else {
      }
   };

   const filtrarEntradasDiario = (nuevosParametrosFiltro) => {
      nuevosParametrosFiltro.numeroPagina = numeroPagina;
      obtenerEntradasDiario(nuevosParametrosFiltro);
   };

   const eliminarEntrada = async (idEntrada) => {
      const respuesta = await api.eliminarEntradaDiario(usuario.id, idEntrada);

      if (respuesta.ok) {
         obtenerEntradasDiario(estadoPrincipal.parametrosFiltro);
      } else {
      }
   };

   return (
      <div className="subseccion-diario">
         <label>
            <h5 className="subseccion-diario-nombre">Tu Diario</h5>
         </label>
         <div className="subseccion-diario-principal">
            <PanelOpcionesDiario
               registrarEntradaDiario={registrarEntradaDiario}
               filtrarEntradasDiario={filtrarEntradasDiario}
            />
            <ContenedorDiario
               entradasDiario={estadoPrincipal.entradasDiario}
               eliminarEntrada={eliminarEntrada}
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

export default SubseccionDiario;
