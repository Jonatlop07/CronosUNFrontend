import React,{ useState } from 'react';
import ContenedorMateria from './ContenedorMateria'
import "./estilos/contenedorAsignaturas.scss";

const ContenedorAsignaturas = (props) =>{
    const agregarAsignatura = (materia,grupo) =>{
        props.agregarAsignatura(materia,grupo)
    }
    const desagregarAsignatura = (materia,grupo) =>{
        props.desagregarAsignatura(materia,grupo)
    }
    return(
        <div className="contenedor-asignaturas">
                {props.ListaMaterias.map((materia, indice) =>(
                    <ContenedorMateria key={`contMat${indice}`} materia={materia} agregarAsignatura={agregarAsignatura} desagregarAsignatura={desagregarAsignatura}/>
                ))}
        </div>
    );
}

export default ContenedorAsignaturas; 