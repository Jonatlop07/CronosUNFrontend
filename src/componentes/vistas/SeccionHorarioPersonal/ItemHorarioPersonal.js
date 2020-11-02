import React, { useState } from 'react';
import ModalPrueba from "./ModalPrueba";

const ItemHorarioPersonal = (props) => {

const[cambiandoCreditos, setCambiandoCreditos] = useState(false);
const[creditos, setCreditos] = useState(props.creditos);

const terminarCambiandoCreditos =() =>{
    setCambiandoCreditos(false);
} 

    return (
        <li className="lista">
            <div className="contenedor-seccion-funciones-creditos-materias">
                <h5 className = "contenedor-seccion-funciones-creditos-materias-indiv">
                {props.nombre} - {props.creditos} creditos 
                <button onClick={()=>{setCambiandoCreditos(true)}}
                 className="contenedor-seccion-funciones-creditos-materias-boton"> 
                Cambiar creditos </button>
                {cambiandoCreditos && (<ModalPrueba 
                cambiarCreditos = {setCreditos} 
                terminarCambiandoCreditos={terminarCambiandoCreditos}/>)}
                </h5>    
            </div>
        </li>
      );
}
 
export default ItemHorarioPersonal;