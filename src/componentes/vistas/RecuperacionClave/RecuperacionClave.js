import React,{useState} from 'react';

import "./estilos/recuperacionClave.scss";

const RecuperacionClave = (props) => {
    const [envioCorreo,setEnvioCorreo]= useState('');
    const handleInputChange =(event) =>{
        setEnvioCorreo({...envioCorreo,[event.target.name]: event.target.value})
    }
    const enviarCorreo = (event) => {
        event.preventDefault();
        console.log(envioCorreo)
    }
    return (
        <div className="recuperacion-clave">
            <p className="recuperacion-clave-titulo">CronosUN</p>
            <p className="recuperacion-clave-etiqueta">Ingrese su correo para validar el cambio de contraseña:</p>
            <form onSubmit={enviarCorreo}>
                <input type="text" name="Correo" className="recuperacion-clave-entrada"  onChange={handleInputChange}/>
                <input type="submit" value="Enviar" className="recuperacion-clave-boton-enviar"/>
            </form>
        </div>
    ); 
}

export default RecuperacionClave;