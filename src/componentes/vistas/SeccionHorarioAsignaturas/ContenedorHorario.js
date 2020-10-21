import React from 'react';

import "./estilos/contenedorHorario.scss";
const Dias = ['Hora','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const Materias7 =[{materia:'7'},NaN,NaN,NaN,NaN,NaN,NaN]
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
const Materias =[Materias7,Materias8,Materias9,Materias10,Materias11,Materias12,Materias1,Materias2,Materias3,Materias4,Materias5,Materias6,Materiasf]

const ContenedorHorario = (props) =>{
    props.horarioActualizado.forEach(element => {
        if (element.grupo.hora == '7-9'){
            element.grupo.dias.forEach(dia => {
                if (dia == 'Jueves'){
                    Materias7[4]=element
                    console.log(Materias7)
                }
            });
        }
    });
    return(
        <div className="contenedor-horario">
            <div className='contenedor-horario-principal'>
                {Dias.map((dia) => (
                    <p className="contenedor-horario-principal-dia">{dia}</p>
                ))}
            </div>
            <div className='contenedor-horario-contenido'>
                {Materias.map((materias) => (
                    materias.map((materia) =>(
                        <p className='contenedor-horario-contenido-hora'>{materia.materia}</p>
                    ))
                ))}
            </div>
        </div>
    );
}

export default ContenedorHorario; 