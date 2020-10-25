import React, {useState,useEffect} from 'react';

import "./estilos/contenedorHorario.scss";
const dias = ['Hora','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const horas = ['7','8','9','10','11','12','13','14','15','16','17','18','19']
const materiasLunes = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
const materiasMartes = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
const materiasMiercoles = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
const materiasJueves= [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
const materiasViernes = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
const materiasSabado = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
const materias = [materiasLunes,materiasMartes,materiasMiercoles,materiasJueves,materiasViernes,materiasSabado]

const ContenedorHorario = (props) =>{
    const [horarioActualizado,setHorarioActualizado] = useState(props.horarioActualizado)
    const actualizarHorario = () => {
        props.horarioActualizado.forEach(materia => {
            const horainicial = parseInt(materia.grupo.hora.split("-")[0])
            const horafinal = parseInt(materia.grupo.hora.split("-")[1])
            for (let i =0 ; i<materia.grupo.dias.length;i++){
                switch(materia.grupo.dias[i]){
                    case 'Lunes': 
                        for(let j=horainicial; j<horafinal;j++){
                            materiasLunes[j-7]=materia; 
                        }
                        break; 
                    case 'Martes': 
                        for(let j=horainicial; j<horafinal;j++){
                            materiasMartes[j-7]=materia; 
                        }
                        break; 
                    case 'Miercoles':
                        for(let j=horainicial; j<horafinal;j++){
                            materiasMiercoles[j-7]=materia; 
                        }
                        break; 
                    case 'Jueves':  
                        for(let j=horainicial; j<horafinal;j++){
                            materiasJueves[j-7]=materia; 
                        }
                        break; 
                    case 'Viernes': 
                        for(let j=horainicial; j<horafinal;j++){
                            materiasViernes[j-7]=materia; 
                        }
                        break; 
                    case 'Sabado': 
                        for(let j=horainicial; j<horafinal;j++){
                            materiasSabado[j-7]=materia; 
                        }
                        break
                }
            }
        })
    }
    useEffect(actualizarHorario,[])
    return(
        <div className="contenedor-horario">
            <div className='contenedor-horario-principal'>
                {dias.map((dia) => (
                    <p className="contenedor-horario-principal-dia">{dia}</p>
                ))}
            </div>
            <div className='contenedor-horario-contenido'>
                {horas.map((hora)=>(
                    <p className='contenedor-horario-contenido-hora'>{hora}</p>
                ))}
                {materias.map((materias) => (
                    materias.map((materia) =>(
                        <div>
                            { materia.materia != null ? 
                            <div className='contenedor-horario-contenido-materia'>
                                <p>{materia.materia}</p>
                                <p>Profesor:{materia.grupo.profesor}</p>
                            </div>
                            : <div></div>}
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
}

export default ContenedorHorario; 