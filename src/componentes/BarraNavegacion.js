import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./estilos/barraNavegacion.scss";

import {
   RUTA_INICIO,
   RUTA_INICIO_SESION,
   RUTA_REGISTRO,
   RUTA_REC_CLAVE,
   RUTA_CUENTA_USUARIO,
   RUTA_SEC_HORARIO_ASIG,
   RUTA_SEC_HORARIO_PERSONAL,
   RUTA_SEC_PORTAFOLIO,
   RUTA_SEC_PROYECTOS_PUBLICOS,
   RUTA_SEC_EDITOR,
   RUTA_SEC_INSCRIPCION_MATERIAS,
} from "../utilidad/rutas.js";

const BarraNavegacion = (props) => {
   const [mostrandoOpciones, setMostrandoOpciones] = useState(" escondida");

   return (
      <nav className="barra-navegacion">
         <ul>
            <li className="barra-navegacion-inicio">
               <Link className="barra-navegacion-enlace" to={RUTA_INICIO}>
                  Inicio
               </Link>
            </li>
            <div className="barra-navegacion-secciones">
               <i
                  className="fas fa-bars"
                  onClick={(e) => {
                     setMostrandoOpciones(
                        mostrandoOpciones === "" ? " escondida" : ""
                     );
                  }}
               ></i>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_INICIO_SESION}
                  >
                     Inicio Sesion
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link className="barra-navegacion-enlace" to={RUTA_REGISTRO}>
                     Registro
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link className="barra-navegacion-enlace" to={RUTA_REC_CLAVE}>
                     Recuperacion Clave
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_CUENTA_USUARIO}
                  >
                     Cuenta
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_SEC_HORARIO_ASIG}
                  >
                     Horario de asignaturas
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_SEC_HORARIO_PERSONAL}
                  >
                     Horario personal
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_SEC_PORTAFOLIO}
                  >
                     Portafolio
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_SEC_PROYECTOS_PUBLICOS}
                  >
                     Proyecto público
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_SEC_EDITOR}
                  >
                     Editor
                  </Link>
               </li>
               <li className={`barra-navegacion-enlace ${mostrandoOpciones}`}>
                  <Link
                     className="barra-navegacion-enlace"
                     to={RUTA_SEC_INSCRIPCION_MATERIAS}
                  >
                     Inscripción
                  </Link>
               </li>
            </div>
         </ul>
      </nav>
   );
};

export default BarraNavegacion;
