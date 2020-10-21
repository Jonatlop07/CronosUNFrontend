import React,{ useState } from 'react';
import ContenedorMateria from './ContenedorMateria'
import "./estilos/contenedorAsignaturas.scss";

const ContenedorAsignaturas = (props) =>{
    const agregarAsignatura = (materia,grupo) =>{
        props.establecerMateriaElegida(materia,grupo)
    }
    return(
        <div className="contenedor-asignaturas">
                {props.ListaMaterias.map((materia) =>(
                    <ContenedorMateria materia={materia} agregarAsignatura={agregarAsignatura}/>
                ))}
        </div>
    );
}

export default ContenedorAsignaturas; 