import React,{ useState } from 'react';
import "./estilos/contenedorAsignaturas.scss";

const ContenedorGrupo = (props) => {
    const establecerGrupo = () => {
        props.establecerMateria(props.grupo)
    }
    return(
        <div className="contenedor-asignaturas-materia-grupo">
            <p>Hora: {props.grupo.hora}</p>
            <p>Profesor: {props.grupo.profesor}</p>
            <p>Días: {props. grupo.dias}</p>
            <input type="submit" value="Registrar" onClick={establecerGrupo}/>
        </div>
)
}

export default ContenedorGrupo; 