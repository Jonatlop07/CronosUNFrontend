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
            <div className="modal-agregar-asignatura">
                <h3 className="modal-agregar-asignatura-titulo">Inscripción de Asignaturas</h3>
                <form className="modal-agregar-asignatura-formulario" onSubmit={enviarFormulario}>
                    <textarea className="modal-agregar-asignatura-formulario-campotexto" onChange={handleInputChange} placeholder="Ingresa la información de la materia"/>
                    <div className ="modal-agregar-asignatura-formulario-botones">
                        <input type= "submit" className ="modal-agregar-asignatura-formulario-botones-nueva-asignatura" value="Agregar nueva asignatura"/>
                        <input type= "submit" className ="modal-agregar-asignatura-formulario-botones-finalizar" value="Finalizar" onClick={props.terminarAgregandoAsignaturas} />
                    </div> 
                </form>
            </div>
        </div>, document.getElementById("modal")
    );
} 

export default ModalAgregarAsignaturas;