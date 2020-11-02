import React from 'react'
import ReactDOM from 'react-dom'
import "./estilos/modalPrueba.scss";

const ModalPrueba = (props) =>{

    return ReactDOM.createPortal(
        <div className="contenedor-modal-creditos">
            <div className="modal-creditos">
                <form className="modal-creditos-formulario">
                    <textarea className="modal-creditos-formulario-texto" placeholder="Ingresa el numero nuevo de creditos para la materia"/>
                    <input type="submit" className="modal-creditos-formulario-botones" value="Cambiar creditos" onClick={props.terminarCambiandoCreditos}/>
                    
                </form>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default ModalPrueba;