import React, { useState } from "react";

import "./estilos/modalRegistroEntrada.scss";

const ModalRegistroEntrada = (props) => {
   const [textoEntrada, setTextoEntrada] = useState("");

   const INSTRUCCIONES_TEXTAREA =
      "Este espacio es para que ingreses el texto de tu entrada.";

   const actualizarTexto = (evento) => {
      setTextoEntrada(evento.value);
   };

   const terminarRegistroEntrada = () => {
      props.cambiarEstadoRegDeEntrada(false);
   };

   const registrarEntradaDeDiario = () => {
      /*Se ingresa la entrada en la base de datos*/

      terminarRegistroEntrada();
   };

   return (
      <div>
         <h5>Nueva entrada</h5>
         <form>
            <input
               name="entrada"
               value={textoEntrada}
               onChange={actualizarTexto}
               placeholder={INSTRUCCIONES_TEXTAREA}
               autoFocus
               required
            ></input>
            <input type="submit" onClick={}>
               Registrar
            </input>
            <button onClick={terminarRegistroEntrada}>Cancelar</button>
         </form>
      </div>
   );
};

export default ModalRegistroEntrada;
