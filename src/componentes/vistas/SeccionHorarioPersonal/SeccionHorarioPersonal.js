import React, { useState } from "react";
import "./estilos/seccionHorarioPersonal.scss";
import ContenedorHorario from "./ContenedorHorario";
import ItemHorarioPersonal from "./ItemHorarioPersonal";

const materias = [
   {
      nombre: "Algebra Lineal",
      creditos: 4,
      dias: ["Lunes", "Miercoles"],
      hora: "7-9",
      profesor: "Juan Rojas",
   },
   {
      nombre: "Ingenieria de software",
      creditos: 3,
      dias: ["Martes", "Jueves"],
      hora: "9-11",
      profesor: "Liz Capataz",
   },
   {
      nombre: "Sistemas Operativos",
      creditos: 2,
      dias: ["Miercoles", "Viernes"],
      hora: "11-13",
      profesor: "Santiago Niño",
   },
   {
      nombre: "Grafica Interactiva",
      creditos: 3,
      dias: ["Martes", "Jueves"],
      hora: "11-13",
      profesor: "Jaime Beltran",
   },
   {
      nombre: "Chino I",
      creditos: 2,
      dias: ["Lunes", "Miercoles"],
      hora: "14-16",
      profesor: "Jhon Gomez",
   },
   {
      nombre: "Chino I",
      creditos: 2,
      dias: ["Lunes", "Miercoles"],
      hora: "14-16",
      profesor: "Jhon Gomez",
   },
   {
      nombre: "Chino I",
      creditos: 2,
      dias: ["Lunes", "Miercoles"],
      hora: "14-16",
      profesor: "Jhon Gomez",
   },
   {
      nombre: "Chino I",
      creditos: 2,
      dias: ["Lunes", "Miercoles"],
      hora: "14-16",
      profesor: "Jhon Gomez",
   },
   {
      nombre: "Chino I",
      creditos: 2,
      dias: ["Lunes", "Miercoles"],
      hora: "14-16",
      profesor: "Jhon Gomez",
   },
   {
      nombre: "Chino I",
      creditos: 2,
      dias: ["Lunes", "Miercoles"],
      hora: "14-16",
      profesor: "Jhon Gomez",
   },
];

const SeccionHorarioPersonal = (props) => {
   const [materiasHorario, setMateriasHorario] = useState(materias);

   const agregarAsignatura = (materia, grupo) => {
      const horarioAux = [...materiasHorario];
      horarioAux.push({ materia, grupo });
      setMateriasHorario(horarioAux);
   };

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
                     href="!#"
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
                     href="!#"
                     className="contenedor-seccion-horario-personal-funciones-tooltip-toggleB"
                     aria-label="Cambia tu horario de acuerdo a la complejidad de cada materia medida en créditos."
                     tabIndex="0"
                  >
                     <i className="fas fa-question-circle"></i>
                  </a>
               </h3>
               <div className="contenedor-seccion-horario-personal-funciones-creditos">
                  <ul>
                     {materiasHorario.map((item, indice) => (
                        <ItemHorarioPersonal
                           nombre={item.nombre}
                           creditos={item.creditos}
                           key={`mat${indice}`}
                        />
                     ))}
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
