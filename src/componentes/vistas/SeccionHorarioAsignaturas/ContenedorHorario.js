import React, { useState, useEffect } from "react";
import { horas, dias, materias } from "./materias.js";
import "./estilos/contenedorHorario.scss";

const ContenedorHorario = (props) => {
   const [materiasHorario, setMateriasHorario] = useState(materias);

   const actualizarHorario = () => {
      const nuevasMaterias = [...materiasHorario];
      if (props.horarioActualizado != null) {
         props.horarioActualizado.forEach((materia) => {
            const horainicial = parseInt(materia.grupo.hora.split("-")[0]);
            const horafinal = parseInt(materia.grupo.hora.split("-")[1]);

            for (let i = 0; i < materia.grupo.dias.length; i++) {
               switch (materia.grupo.dias[i]) {
                  case "Lunes":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[0][j - 7] = materia;
                     }
                     break;
                  case "Martes":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[1][j - 7] = materia;
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                              props.horarioActualizado[k].materia
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Miercoles":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[2][j - 7] = materia;
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                              props.horarioActualizado[k].materia
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Jueves":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[3][j - 7] = materia;
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                              props.horarioActualizado[k].materia
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Viernes":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[4][j - 7] = materia;
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                              props.horarioActualizado[k].materia
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Sabado":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[5][j - 7] = materia;
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                              props.horarioActualizado[k].materia
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
               }
            }
         });
         setMateriasHorario(nuevasMaterias);
      }
      if (props.materiasEliminadas != null) {
         props.materiasEliminadas.forEach((materia) => {
            const horainicial = parseInt(materia.grupo.hora.split("-")[0]);
            const horafinal = parseInt(materia.grupo.hora.split("-")[1]);

            for (let i = 0; i < materia.grupo.dias.length; i++) {
               switch (materia.grupo.dias[i]) {
                  case "Lunes":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[0][j - 7] = NaN;
                        props.materiasEliminadas.splice(0, 1);
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                                 props.horarioActualizado[k].materia &&
                              materia.grupo == props.horarioActualizado[k].grupo
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Martes":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[1][j - 7] = NaN;
                        props.materiasEliminadas.splice(0, 1);
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                                 props.horarioActualizado[k].materia &&
                              materia.grupo == props.horarioActualizado[k].grupo
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Miercoles":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[2][j - 7] = NaN;
                        props.materiasEliminadas.splice(0, 1);
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                                 props.horarioActualizado[k].materia &&
                              materia.grupo == props.horarioActualizado[k].grupo
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Jueves":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[3][j - 7] = NaN;
                        props.materiasEliminadas.splice(0, 1);
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                                 props.horarioActualizado[k].materia &&
                              materia.grupo == props.horarioActualizado[k].grupo
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Viernes":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[4][j - 7] = NaN;
                        props.materiasEliminadas.splice(0, 1);
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                                 props.horarioActualizado[k].materia &&
                              materia.grupo == props.horarioActualizado[k].grupo
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
                  case "Sabado":
                     for (let j = horainicial; j < horafinal; j++) {
                        nuevasMaterias[5][j - 7] = NaN;
                        props.materiasEliminadas.splice(0, 1);
                        for (
                           let k = 0;
                           k < props.horarioActualizado.length;
                           k++
                        ) {
                           if (
                              materia.materia ==
                                 props.horarioActualizado[k].materia &&
                              materia.grupo == props.horarioActualizado[k].grupo
                           ) {
                              props.horarioActualizado.splice(k, 1);
                           }
                        }
                     }
                     break;
               }
            }
         });
      }
      setMateriasHorario(nuevasMaterias);
   };
   useEffect(actualizarHorario, [props.horarioActualizado]);
   useEffect(actualizarHorario, [props.materiasEliminadas]);

   return (
      <div className="contenedor-horario">
         <div className="contenedor-horario-principal">
            {dias.map((dia) => (
               <p className="contenedor-horario-principal-dia">{dia}</p>
            ))}
         </div>
         <div className="contenedor-horario-contenido">
            {horas.map((hora) => (
               <p className="contenedor-horario-contenido-hora">{hora}</p>
            ))}
            {materiasHorario.map((materiasDia, indMatDia) =>
               materiasDia.map((materiaDia, indice) => (
                  <div key={`contAsig${indMatDia}_${indice}`}>
                     {materiaDia.materia != null ? (
                        <div className="contenedor-horario-contenido-materia">
                           <p>{materiaDia.materia}</p>
                           <p>Profesor:{materiaDia.grupo.profesor}</p>
                        </div>
                     ) : (
                        <div></div>
                     )}
                  </div>
               ))
            )}
         </div>
      </div>
   );
};

export default ContenedorHorario;