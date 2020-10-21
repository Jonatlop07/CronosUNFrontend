import React,{ useState } from 'react';
import ContenedorGrupo from "./ContenedorGrupo"
import "./estilos/contenedorAsignaturas.scss";

const ContenedorMateria = (props) =>{
    const establecerMateria = (grupo) => {
        props.agregarAsignatura(props.materia.nombre,grupo)
    }
    return(
        <div className="contenedor-asignaturas-materia">
            <p>{props.materia.nombre}</p>
            {props.materia.grupos.map((grupo) =>(
                <ContenedorGrupo grupo={grupo} establecerMateria={establecerMateria}/>
            ))}
        </div>
    )
}

export default ContenedorMateria;