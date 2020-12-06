import React, { useState } from "react";
import ModalAgregarAsignatura from "./ModalAgregarAsignatura.js";


import "./estilos/SeccionInscripcionMaterias.scss";

const SeccionInscripcionMaterias = (props) => {
   const [agregandoAsignaturas, setAgregandoAsignaturas] = useState(false);
   const terminarAgregandoAsignaturas = () => {
      setAgregandoAsignaturas(false);
   };
   return (
      <div className="contenedor-seccion-inscripcion">
         <div className="contenedor-seccion-inscripcion-tutorial">
            <h1 className="contenedor-seccion-inscripcion-tutorial-titulo">
               Inscripción de Asignaturas
            </h1>
            <div className="contenedor-seccion-inscripcion-tutorial-texto">
               <p>Sigue este tutorial para inscribir tus asignaturas:</p>
               <p>1: Ingresa al buscador de asignaturas en el SIA haciendo click <a href="https://sia.unal.edu.co/ServiciosApp/facespublico/public/servicioPublico.jsf?taskflowId=task-flow-AC_CatalogoAsignaturas">aquí</a></p>
               <p>
                  2: Ubica la asignatura que quieres inscribir e ingresa a su
                  descripción de grupos.
               </p>
               <p>3: Utiliza CTRL+A y luego CTRL +C.</p>
               <p>
                  4: Ingresa a Cronos UN y clickea en el botón "Agregar
                  Asignatura".
               </p>
               <p>
                  5: Utiliza CTRL+V y añade la cantidad de materias que desees
                  siguiendo los pasos anteriores.
               </p>
            </div>
         </div>
         <input
            type="submit"
            value="Agregar Asignatura"
            className="contenedor-seccion-inscripcion-boton-agregar"
            onClick={() => {
               setAgregandoAsignaturas(true);
            }}
         />
         {agregandoAsignaturas && (
            <ModalAgregarAsignatura
               terminarAgregandoAsignaturas={terminarAgregandoAsignaturas}
            />
         )}
      </div>
   );
};

export default SeccionInscripcionMaterias;
