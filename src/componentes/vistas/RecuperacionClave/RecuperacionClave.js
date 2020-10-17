import React from 'react';

import "./estilos/recuperacionClave.scss";

const RecuperacionClave = (props) => {
    return (
        <div className="recuperacion-clave">
            <p className="recuperacion-clave-titulo">CronosUN</p>
            <p className="recuperacion-clave-etiqueta">Ingrese su correo para validar el cambio de contraseña:</p>
            <form>
                <input type="text" name="Correo" className="recuperacion-clave-entrada"/>
                <input type="submit" value="Enviar" className="recuperacion-clave-boton-enviar"/>
            </form>
        </div>
    ); 
}

export default RecuperacionClave;