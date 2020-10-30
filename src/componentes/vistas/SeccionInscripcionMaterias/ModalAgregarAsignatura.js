import React, {useState} from 'react';
import ReactDOM from "react-dom";

import "./estilos/modalAgregarAsignaturas.scss"; 

const ModalAgregarAsignaturas = (props) => {
    const [envioFormulario,setEnvioFormulario]= useState();
    const handleInputChange =(event) =>{
        setEnvioFormulario({...envioFormulario,[event.target.name]: event.target.value})
    }
    const enviarFormulario =(event) =>{
        event.preventDefault();
        console.log(envioFormulario)
        event.target.reset()
    }
    return ReactDOM.createPortal(
        <div className="contenedor-modal-agregar-asignatura">
                <form className="contenedor-modal-agregar-asignatura-formulario" onSubmit={enviarFormulario}>
                    <textarea className="contenedor-modal-agregar-asignatura-formulario-campotexto" onChange={handleInputChange}/>
                    <div className ="contenedor-modal-agregar-asignatura-formulario-botones">
                        <input type= "submit" className ="contenedor-modal-agregar-asignatura-formulario-botones-nueva-asignatura" value="Agregar nueva asignatura"/>
                        <input type= "submit" className ="contenedor-modal-agregar-asignatura-formulario-botones-finalizar" value="Finalizar" onClick={props.terminarAgregandoAsignaturas} />
                    </div> 
                </form>
        </div>, document.getElementById("modal")
    );
} 

export default ModalAgregarAsignaturas;