import React from 'react';
import ContenedorHorario from "./ContenedorHorario.js"
import ContenedorAsignaturas from "./ContenedorAsignaturas.js"
import "./estilos/seccionHorarioAsignaturas.scss";

const Materias =[{titulo:'Algebra Lineal', creditos:4},{titulo:'Calculo Diferencial', creditos:4},{titulo:'Estructuras de datos',creditos:3}]
const SeccionHorarioAsignaturas = (props) => {
    return ( 
        <div className="contenedor-seccion">
            <ContenedorHorario/>
            <input type="submit" value="Agregar asignatura" className="contenedor-seccion-boton-agregar"/>
            <ContenedorAsignaturas/>
        </div>
     );
}
 
export default SeccionHorarioAsignaturas;