import React, {useState} from 'react';
import ReactDOM from "react-dom";

import "./estilos/modalAgregarAsignaturas.scss"; 

const ModalAgregarAsignaturas = (props) => {
    return ReactDOM.createPortal(
        <div>
            <p>Listo</p>
        </div>, document.getElementById("modal")
    );
} 

export default ModalAgregarAsignaturas;