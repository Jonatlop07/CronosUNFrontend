import React from "react";

import "./estilos/modalEliminacionEntrada.scss";

const ModalEliminacionEntrada = (props) => {
   const eliminarEntrada = () => {
      props.eliminarEntrada();
   };

   const cancelarEliminacion = () => {
      props.cancelarEliminacion();
   };

   return (
      <div className="modal-eliminacion-entrada">
         <h5>Eliminación de entrada</h5>
         <p className="modal-eliminacion-entrada-mensaje">
            ¿Estás seguro que deseas eliminar esta entrada?
         </p>
         <button onClick={eliminarEntrada}>Confirmar</button>
         <button onClick={cancelarEliminacion}>Cancelar</button>
      </div>
   );
};

export default ModalEliminacionEntrada;
