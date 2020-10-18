import React from 'react';

import "./estilos/seccionHorarioAsignaturas.scss";
const Dias = ['Hora','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
const Horas =['7-9','9-11','11-1','1-2','2-4','4-6','6-8']
const SeccionHorarioAsignaturas = (props) => {
    return ( 
        <div className="contenedor-horario">
            <div className='contenedor-horario-principal'>
                {Dias.map((dia) => (
                    <p>{dia}</p>
                ))}
            </div>
            <div className='contenedor-horario-contenido'>
                {Horas.map((hora) => (
                    <p className='contenedor-horario-contenido-hora'>{hora}</p>
                ))}
            </div>
            <input type="submit" value="Agregar asignatura" className="contenedor-horario-boton-agregar"/>
            <div className ='contenedor-horario-materias'>
                
            </div>
        </div>
     );
}
 
export default SeccionHorarioAsignaturas;