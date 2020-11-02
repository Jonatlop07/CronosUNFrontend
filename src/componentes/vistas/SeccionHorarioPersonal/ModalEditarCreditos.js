import React from "react";
import ReactDOM from "react-dom";
import "./estilos/modalEditarCreditos.scss";

const ModalEditarCreditos = (props) => {
  return ReactDOM.createPortal(
    <div className="contenedor-modal-creditos">
      <div className="modal-creditos">
        <h3 className="modal-creditos-titulo">Nuevo número de créditos</h3>
        <form className="modal-creditos-formulario">
          <input type="text"
            className="modal-creditos-formulario-texto"
            placeholder="Número de créditos"
          />
          <input
            type="submit"
            className="modal-creditos-formulario-botones"
            value="Cambiar créditos"
            onClick={props.terminarCambiandoCreditos}
          />
          <input
            className="modal-creditos-formulario-botones"
            type="submit"
            value="Cancelar"
            onClick={props.terminarCambiandoCreditos}
          />
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalEditarCreditos;
