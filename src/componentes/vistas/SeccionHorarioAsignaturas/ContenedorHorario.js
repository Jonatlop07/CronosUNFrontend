import React, {useState} from 'react';

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

/* const Materias7 =[{materia:'7'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias8 = [{materia:'8'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias9 = [{materia:'9'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias10 = [{materia:'10'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias11 = [{materia:'11'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias12 = [{materia:'12'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias1 = [{materia:'1'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias2 = [{materia:'2'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias3 = [{materia:'3'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias4 = [{materia:'4'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias5 = [{materia:'5'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias6 = [{materia:'6'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materiasf = [{materia:'7'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias =[Materias7,Materias8,Materias9,Materias10,Materias11,Materias12,Materias1,Materias2,Materias3,Materias4,Materias5,Materias6,Materiasf] */

const ContenedorHorario = (props) =>{
    props.horarioActualizado.forEach(materia => {
        const horainicial = materia.grupo.hora.split("-")[0]
        const horafinal = materia.grupo.hora.split("-")[1]
        const diferenciahoras = horafinal-horainicial
        for (let i =0 ; i<materia.grupo.dias.length;i++){
            switch(materia.grupo.dias[i]){
                case 'Lunes': 
                    for(let j= horainicial; j<horafinal;j++){
                        materiasLunes[j-7]=materia; 
                        console.log(materia)
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
    });
    /* if(props.horarioActualizado.length!=0){
        props.horarioActualizado.forEach(materia => {
            const horainicial = materia.grupo.hora.split("-")[0];
            const horafinal = materia.grupo.hora.split("-")[1]
            switch(horainicial){
                case '7': 
                for(let i =0; i<materia.grupo.dias.length;i++){
                    switch (materia.grupo.dias[i]){
                        case 'Lunes': 
                            Materias7[1]=materia;
                            break; 
                        case 'Miercoles':
                            
                            break; 
                    }
                }
            }
            for(let i =0; i<materia.grupo.dias.length;i++){
                switch (materia.grupo.dias[i]){
                    case 'Lunes': 
                        Materias7[1]=materia;
                        break; 
                    case 'Miercoles':
                        
                        break; 
                }
            }
        });
    } */ 
    const materiaNaN = () => {

    }
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