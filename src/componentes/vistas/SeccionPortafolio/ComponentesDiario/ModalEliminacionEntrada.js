import React from "react";
import ReactDOM from "react-dom";

import "./estilos/modalEliminacionEntrada.scss";

const ModalEliminacionEntrada = (props) => {
   const eliminarEntrada = () => {
      props.eliminarEntrada();

      finalizarEliminacion();
   };

   const finalizarEliminacion = () => {
      props.cancelarEliminacion();
   };

   return ReactDOM.createPortal(
      <div className="contenedor-modal-eliminacion-entrada">
         <div className="modal-eliminacion-entrada">
            <h5>Eliminación de entrada</h5>
            <p className="modal-eliminacion-entrada-mensaje">
               ¿Estás seguro que deseas eliminar esta entrada?
            </p>
            <button onClick={eliminarEntrada}>Confirmar</button>
            <button onClick={finalizarEliminacion}>Cancelar</button>
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default ModalEliminacionEntrada;
