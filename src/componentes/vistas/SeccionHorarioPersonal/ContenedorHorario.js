import React, { useState, useEffect } from "react";
import { horas, dias, materias } from "./materias.js";
import "./estilos/contenedorHorario.scss";

import ModalMostrarMateria from "./ModalMostrarMateria";

const ContenedorHorario = (props) => {
   const [materiasHorario, setMateriasHorario] = useState(materias);
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

   const actualizarHorario = () => {
      const nuevasMaterias = [...materiasHorario];
      if (props.horario != null) {
         props.horario.forEach((materia) => {
            const horaInicial = parseInt(materia.hora.split("-")[0]);
            const horaFinal = parseInt(materia.hora.split("-")[1]);

            for (let i = 0; i < materia.dias.length; i++) {
               switch (materia.dias[i]) {
                  case "Lunes":
                     for (let j = horaInicial; j < horaFinal; j++) {
                        nuevasMaterias[0][j - 8] = materia;
                     }
                     break;
                  case "Martes":
                     for (let j = horaInicial; j < horaFinal; j++) {
                        nuevasMaterias[1][j - 8] = materia;
                        for (let k = 0; k < props.horario.length; k++) {
                           if (materia.materia === props.horario[k].materia) {
                              props.horario.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Miercoles":
                     for (let j = horaInicial; j < horaFinal; j++) {
                        nuevasMaterias[2][j - 8] = materia;
                        for (let k = 0; k < props.horario.length; k++) {
                           if (materia.materia === props.horario[k].materia) {
                              props.horario.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Jueves":
                     for (let j = horaInicial; j < horaFinal; j++) {
                        nuevasMaterias[3][j - 8] = materia;
                        for (let k = 0; k < props.horario.length; k++) {
                           if (materia.materia === props.horario[k].materia) {
                              props.horario.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Viernes":
                     for (let j = horaInicial; j < horaFinal; j++) {
                        nuevasMaterias[4][j - 8] = materia;
                        for (let k = 0; k < props.horario.length; k++) {
                           if (materia.materia === props.horario[k].materia) {
                              props.horario.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Sabado":
                     for (let j = horaInicial; j < horaFinal; j++) {
                        nuevasMaterias[5][j - 8] = materia;
                        for (let k = 0; k < props.horario.length; k++) {
                           if (materia.materia === props.horario[k].materia) {
                              props.horario.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Domingo":
                     for (let j = horaInicial; j < horaFinal; j++) {
                        nuevasMaterias[6][j - 8] = materia;
                        for (let k = 0; k < props.horario.length; k++) {
                           if (materia.materia === props.horario[k].materia) {
                              props.horario.splice(k, 1);
                           }
                        }
                     }
                     break;
               }
            }
         });
         setMateriasHorario(nuevasMaterias);
      }
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
            {materiasHorario.map((materiasDia) =>
               materiasDia.map((materiaDia) => (
                  <div>
                     {materiaDia.nombre != null ? (
                        <div className="contenedor-horario-personal-contenido-materia">
                           <button
                              className="contenedor-horario-personal-contenido-materia-boton"
                              onClick={() => {
                                 crearVentanaModalAsignatura({ materiaDia });
                              }}
                           >
                              {materiaDia.nombre}
                           </button>
                        </div>
                     ) : (
                        <div></div>
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
