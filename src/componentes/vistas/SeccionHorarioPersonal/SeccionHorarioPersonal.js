import React, {useState} from 'react';
import "./estilos/seccionHorarioPersonal.scss";
import ContenedorHorario from "./ContenedorHorario";
import ModalPrueba from "./ModalPrueba";
import ItemHorarioPersonal from './ItemHorarioPersonal';


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
    },
    {
        nombre: "Chino I",
        creditos: 2
    }
]

const SeccionHorarioPersonal = (props) => {
    
    const [materiasHorario, setMateriasHorario] = useState(materias);
            
    return ( 
        <div>
            <h5 className="titulo">Mi horario de estudio</h5>
            <div className="contenedor-seccion">
                <section> 
                <ContenedorHorario/>
                </section>
                <section className="contenedor-seccion-funciones">
                    <h3 className = "contenedor-seccion-funciones-funcion"> Cambiar metodologia de estudio 
                    <a href="!#" className="contenedor-seccion-funciones-tooltip-toggleA" aria-label="Cada metodologia genera un horario de estudio diferente. Escoge el que 
                    mas te guste!" tabIndex="0">
                    <i className="fas fa-question-circle"></i></a></h3>  
                    <select>
                        <option value="" disabled="disabled" defaultValue="selected">Escoge una metodologia</option>
                        <option value="creditos"> Por numero de creditos</option>
                        <option value="pomodoro">Pomodoro</option>
                        <option value="flowtime">Flowtime</option>
                    </select>
                    <h3 className = "contenedor-seccion-funciones-funcion"> Establecer nuevos creditos para mis materias
                    <a href="!#" className="contenedor-seccion-funciones-tooltip-toggleB" aria-label="Cambia tu horario de acuerdo a la complejidad de cada materia medida en creditos." tabIndex="0">
                    <i className="fas fa-question-circle"></i></a></h3> 
                    <div className = "contenedor-seccion-funciones-creditos"> 
                        <ul>
                            {materiasHorario.map((item, indice) =>(<ItemHorarioPersonal nombre={item.nombre} creditos={item.creditos} key={`mat${indice}`}/>
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