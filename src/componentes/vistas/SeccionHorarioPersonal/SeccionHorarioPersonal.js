import React, { useEffect, useState } from "react";
import "./estilos/seccionHorarioPersonal.scss";
import ContenedorHorario from "./ContenedorHorario";
import ItemHorarioPersonal from "./ItemHorarioPersonal";
import { useLocation } from "react-router-dom";

const SeccionHorarioPersonal = (props) => {
   const location = useLocation();

   const [materiasHorario, setMateriasHorario] = useState([]);

   const agregarAsignatura = (materia, grupo) => {
      const horarioAux = [...materiasHorario];
      horarioAux.push({ materia, grupo });
      setMateriasHorario(horarioAux);
   };

   const agregarMateriasHorario = () => {
      setMateriasHorario(location.horarioEnvio);
   };

   useEffect(() => {
      agregarMateriasHorario();
   }, []);

   return (
      <div>
         <h1 className="titulo">Mi horario de estudio</h1>
         <div className="contenedor-seccion-horario-personal">
            <section className="contenedor-seccion-horario-personal-horario">
               <ContenedorHorario
                  horario={materiasHorario}
                  agregarAsignatura={agregarAsignatura}
               />
            </section>
            <section className="contenedor-seccion-horario-personal-funciones">
               <h3 className="contenedor-seccion-horario-personal-funciones-funcion">
                  {" "}
                  Cambiar metodología de estudio
                  <a
                     className="contenedor-seccion-horario-personal-funciones-tooltip-toggleA"
                     aria-label="Cada metodología genera un horario de estudio diferente. Escoge el que 
                    mas te guste!"
                     tabIndex="0"
                  >
                     <i className="fas fa-question-circle"></i>
                  </a>
               </h3>
               <select className="contenedor-seccion-horario-personal-funciones-metodologia">
                  <option value="" disabled="disabled" defaultValue="selected">
                     Escoge una metodología
                  </option>
                  <option value="creditos"> Por número de creditos</option>
                  <option value="pomodoro">Pomodoro</option>
                  <option value="flowtime">Flowtime</option>
               </select>
               <h3 className="contenedor-seccion-horario-personal-funciones-funcion">
                  {" "}
                  Establecer nuevos créditos para mis materias
                  <a
                     className="contenedor-seccion-horario-personal-funciones-tooltip-toggleB"
                     aria-label="Cambia tu horario de acuerdo a la complejidad de cada materia medida en créditos."
                     tabIndex="0"
                  >
                     <i className="fas fa-question-circle"></i>
                  </a>
               </h3>
               <div className="contenedor-seccion-horario-personal-funciones-creditos">
                  <ul>
                     {materiasHorario && Array.isArray(materiasHorario) ? (
                        materiasHorario.map((item, indice) => (
                           <ItemHorarioPersonal
                              nombre={item.nombre}
                              creditos={item.creditos}
                              key={`mat${indice}`}
                           />
                        ))
                     ) : (
                        <p>no</p>
                     )}
                  </ul>
               </div>
               <button className="contenedor-seccion-horario-personal-funciones-descargar">
                  {" "}
                  Descargar horario
               </button>
            </section>
         </div>
      </div>
   );
};

export default SeccionHorarioPersonal;
