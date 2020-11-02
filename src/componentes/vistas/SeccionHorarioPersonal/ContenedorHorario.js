import React, { useState, useEffect } from 'react';
import {horas,dias,materias} from "./materias.js";
import "./estilos/contenedorHorario.scss";


const ContenedorHorario = (props) => {

    const [materiasHorario, setMateriasHorario] = useState(materias);
    
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
            {materiasHorario.map((materiasDia) =>
               materiasDia.map((materiaDia) => (
                  <div>
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
}
 
export default ContenedorHorario;