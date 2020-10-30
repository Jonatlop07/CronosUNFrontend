import React, {useState} from 'react';
import "./estilos/seccionHorarioPersonal.scss";
import ContenedorHorario from "./ContenedorHorario";


const materias = [
    {
        nombre: "Algebra Lineal",
        creditos: 4
    },
    {
        nombre: "Ingenieria de software",
        creditos: 3
    },
    {
        nombre: "Sistemas Operativos",
        creditos: 2
    },
    {
        nombre: "Grafica Interactiva",
        creditos: 3
    }
]

const SeccionHorarioPersonal = (props) => {
    
    const [materia, setCreditos] = useState(materias);
    
    return ( 
        <div>
            <h5 className="titulo">Mi horario de estudio</h5>
            <div className="contenedor-seccion">
                <section> 
                <ContenedorHorario/>
                </section>
                <section className="contenedor-seccion-funciones">
                    <h3 className = "contenedor-seccion-funciones-funcion"> Cambiar metodologia de estudio</h3>  
                    <select>
                        <option value="" disabled="disabled" selected="selected">Escoge una metodologia</option>
                        <option value="creditos"> Por numero de creditos</option>
                        <option value="pomodoro">Pomodoro</option>
                        <option value="flowtime">Flowtime</option>
                    </select>
                    <h3 className = "contenedor-seccion-funciones-funcion"> Establecer nuevos creditos para mis materias</h3>
                    <div className = "contenedor-seccion-funciones-creditos"> 
                        <ul>
                            {materia.map((item) =>(
                                <div className="contenedor-seccion-funciones-creditos-materias">
                                    <h5 className = "contenedor-seccion-funciones-creditos-materias-indiv">
                                    {item.nombre} - {item.creditos} creditos 
                                    <button className="contenedor-seccion-funciones-creditos-materias-boton"> Cambiar creditos </button>
                                    </h5>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <button className ="contenedor-seccion-funciones-descargar"> Descargar horario</button>  
                </section>
            </div>
        </div>
     );
}
 
export default SeccionHorarioPersonal;