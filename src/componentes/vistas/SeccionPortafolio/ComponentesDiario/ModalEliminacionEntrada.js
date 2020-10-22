import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalEliminacionEntrada = (props) => {
   const eliminarEntrada = () => {
      props.eliminarEntrada();

      finalizarEliminacion();
   };

   const [nombreClaseContenedor, setNombreClaseContenedor] = useState(
      "modal-eliminacion-entrada"
   );

   const finalizarEliminacion = () => {
      setNombreClaseContenedor(nombreClaseContenedor.concat(" remover"));
      setTimeout(() => {
         props.cancelarEliminacion();
      }, 1500);
   };

   return ReactDOM.createPortal(
      <div className="contenedor-modal-eliminacion-entrada">
         <div className={nombreClaseContenedor}>
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
