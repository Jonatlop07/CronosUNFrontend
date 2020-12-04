import React, { useState, useEffect } from "react";
import { horas, dias} from "./materias.js";
import "./estilos/contenedorHorario.scss";

import ModalMostrarMateria from "./ModalMostrarMateria";

const ContenedorHorario = (props) => {
   const [materiasHorario, setMateriasHorario] = useState(props.horario);

   const [
      mostrandoInformacionMateria,
      setMostrandoInformacionMateria,
   ] = useState(false);

   let [informacionMateriaDia, setinformacionMateriaDia] = useState({});

   const crearVentanaModalAsignatura = (materia) => {
      setinformacionMateriaDia(materia);
      setMostrandoInformacionMateria(true);
   };

   const terminarMostrandoInformacionMateria = () => {
      setMostrandoInformacionMateria(false);
   };


   return (
      <div className="contenedor-horario-personal">
         <div className="contenedor-horario-personal-principal">
            {dias.map((dia) => (
               <p className="contenedor-horario-personal-principal-dia">
                  {dia}
               </p>
            ))}
         </div>
         <div className="contenedor-horario-personal-contenido">
            {horas.map((hora) => (
               <p className="contenedor-horario-personal-contenido-hora">
                  {hora}
               </p>
            ))}
            {props.horario.map((materiasDia) =>
               materiasDia.map((materiaDia) => (
                  <div>
                     {materiaDia.materia && (
                        <div className="contenedor-horario-personal-contenido-materia">
                           <button
                              className="contenedor-horario-personal-contenido-materia-boton"
                              onClick={() => {
                                 crearVentanaModalAsignatura({ materiaDia });
                              }}
                           >
                              {materiaDia.materia}
                           </button>
                        </div>
                     )}
                  </div>
               ))
            )}
         </div>
         {mostrandoInformacionMateria && (
            <ModalMostrarMateria
               informacionMateriaDia={informacionMateriaDia}
               terminarMostrandoInformacionMateria={
                  terminarMostrandoInformacionMateria
               }
            />
         )}
      </div>
   );
};

export default ContenedorHorario;
