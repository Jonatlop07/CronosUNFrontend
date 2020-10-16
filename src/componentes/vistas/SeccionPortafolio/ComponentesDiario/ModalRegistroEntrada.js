import React, { useState } from "react";

import "./estilos/modalRegistroEntrada.scss";

import {
   obtenerFechaActual,
   obtenerHoraActual,
} from "../../../../utilidad/funcionesFechaYHora.js";

const ModalRegistroEntrada = (props) => {
   const [textoEntrada, setTextoEntrada] = useState("");

   const INSTRUCCIONES_TEXTAREA =
      "Este espacio es para que ingreses el texto de tu entrada.";

   const terminarRegistroEntrada = () => {
      props.cambiarEstadoRegDeEntrada(false);
   };

   const registrarEntradaDeDiario = () => {
      const fechaActual = obtenerFechaActual(),
         horaActual = obtenerHoraActual();
      /*Se ingresa la entrada en la base de datos*/

      terminarRegistroEntrada();
   };

   return (
      <div className="modal-registro-entrada">
         <h5>Nueva entrada</h5>
         <form>
            <div className="modal-registro-entrada-formulario">
               <textarea
                  className="modal-registro-entrada-formulario-texto"
                  rows="5"
                  name="entrada"
                  value={textoEntrada}
                  onChange={(e) => {
                     setTextoEntrada(e.currentTarget.value);
                  }}
                  placeholder={INSTRUCCIONES_TEXTAREA}
                  autoFocus
                  required
               >
                  Enter details here...
               </textarea>
            </div>

            <input
               className="modal-registro-entrada-formulario-registrar"
               type="submit"
               onClick={registrarEntradaDeDiario}
               value="Registrar"
            />
            <button
               className="modal-registro-entrada-formulario-cancelar"
               onClick={terminarRegistroEntrada}
            >
               Cancelar
            </button>
         </form>
      </div>
   );
};

export default ModalRegistroEntrada;
