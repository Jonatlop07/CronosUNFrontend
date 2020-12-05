import React, { useEffect, useState } from "react";

import PanelOpcionesDiario from "./PanelOpcionesDiario.js";
import ContenedorDiario from "./ContenedorDiario.js";
import ContenedorBotonesPaginas from "../ContenedorBotonesPaginas.js";

const SubseccionDiario = (props) => {
   const [estadoPrincipal, setEstadoPrincipal] = useState({
      entradasDiario: [],
      numeroTotalPaginas: 1,
      parametrosFiltro: { idUsuario: "1" },
   });
   const [numeroPagina, setNumeroPagina] = useState(0);

   const obtenerEntradasDiario = async (parametrosFiltro) => {
      const entradas = await fetch(`http://localhost:8080/entradasDiario`, {
         method: "POST",
         headers: {
            Authorization: props.auth,
            "Content-Type": "application/json",
         },
         body: JSON.stringify(parametrosFiltro),
      }).then((respuesta) => respuesta.json());

      const consultaNumeroPaginas = await fetch(
         `http://localhost:8080/entradasDiario/paginas?idUsuario=1`,
         {
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
         }
      ).then((respuesta) => respuesta.json());

      const nuevasEntradas = entradas.map((entrada) => ({
         id: entrada.id,
         fecha: entrada.fecha,
         hora: entrada.hora,
         contenido: entrada.contenido,
      }));

      const nuevoEstadoPrincipal = {
         entradasDiario: nuevasEntradas,
         numeroTotalPaginas: consultaNumeroPaginas.numeroPaginas,
         parametrosFiltro,
      };

      setEstadoPrincipal(nuevoEstadoPrincipal);
   };

   useEffect(() => {
      obtenerEntradasDiario(estadoPrincipal.parametrosFiltro);
   }, []);

   const actualizarNumeroPagina = (nuevoNumeroPagina) => {
      if (nuevoNumeroPagina !== numeroPagina) {
         setNumeroPagina(nuevoNumeroPagina);
      }
   };

   const registrarEntradaDiario = async (entradaDiario) => {
      const respuesta = await fetch(
         `http://localhost:8080/entradasDiario/registro`,
         {
            method: "POST",
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...entradaDiario,
               idUsuario: "1",
            }),
         }
      );

      obtenerEntradasDiario(estadoPrincipal.parametrosFiltro);
   };

   const filtrarEntradasDiario = (nuevosParametrosFiltro) => {
      nuevosParametrosFiltro.idUsuario = "1";
      nuevosParametrosFiltro.numeroPagina = numeroPagina;
      obtenerEntradasDiario(nuevosParametrosFiltro);
   };

   const eliminarEntrada = async (idEntrada) => {
      const respuesta = await fetch(
         `http://localhost:8080/entradasDiario/${idEntrada}`,
         {
            method: "DELETE",
            headers: {
               Authorization: props.auth,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               idUsuario: "1",
            }),
         }
      );

      obtenerEntradasDiario(estadoPrincipal.parametrosFiltro);
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
