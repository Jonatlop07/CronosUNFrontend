import React from 'react';

import "./estilos/contenedorHorario.scss";
const Dias = ['Hora','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const Horas =['7','8','9','10','11','12','1','2','3','4','5','6','7','8']
const Materias7 =[{titulo:'7'},NaN,NaN,{titulo:'Algebra Lineal', creditos:4},{titulo:'Calculo Diferencial', creditos:4},{titulo:'Estructuras de datos',creditos:3},NaN]
const Materias8 = [{titulo:'8'},NaN,NaN,{titulo:'Algebra Lineal', creditos:4},{titulo:'Calculo Diferencial', creditos:4},{titulo:'Estructuras de datos',creditos:3},NaN]
const Materias9 = [{titulo:'9'},{titulo:'Algebra Lineal', creditos:4},{titulo:'Calculo Diferencial', creditos:4},NaN,NaN,NaN,NaN]
const Materias10 = [{titulo:'10'},{titulo:'Algebra Lineal', creditos:4},{titulo:'Calculo Diferencial', creditos:4},NaN,NaN,NaN,NaN]
const Materias11 = [{titulo:'11'},NaN,NaN,NaN,{titulo:'Estructuras de datos',creditos:3},NaN,NaN]
const Materias12 = [{titulo:'12'},NaN,NaN,NaN,{titulo:'Estructuras de datos',creditos:3},NaN,NaN]
const Materias1 = [{titulo:'1'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias2 = [{titulo:'2'},NaN,NaN,{titulo:'Matematicas Discretas', creditos:4},{titulo:'Ingles', creditos:4},NaN,NaN]
const Materias3 = [{titulo:'3'},NaN,NaN,{titulo:'Matematicas Discretas', creditos:4},{titulo:'Ingles', creditos:4},NaN,NaN]
const Materias4 = [{titulo:'4'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias5 = [{titulo:'5'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias6 = [{titulo:'6'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materiasf = [{titulo:'7'},NaN,NaN,NaN,NaN,NaN,NaN]
const Materias =[Materias7,Materias8,Materias9,Materias10,Materias11,Materias12,Materias1,Materias2,Materias3,Materias4,Materias5,Materias6,Materiasf]

const ContenedorHorario = (props) =>{
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
                        <p className='contenedor-horario-contenido-hora'>{materia.titulo}</p>
                    ))
                ))}
            </div>
        </div>
    );
}

export default ContenedorHorario; 