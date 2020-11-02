import React from "react";
import ReactDOM from "react-dom";
import "./estilos/modalHorario.scss";

const ModalEditarCreditos = (props) => {
  return ReactDOM.createPortal(
    <div className="contenedor-modal-horario">
      <div className="modal-horario">
        <h3 className="modal-horario-titulo">Nuevo número de créditos</h3>
        <h4 className="modal-horario-subtitulo">{props.nombre}</h4>
        <form className="modal-horario-formulario">
          <input
            type="text"
            className="modal-horario-formulario-texto"
            placeholder="Número de créditos"
          />
          <input
            type="submit"
            className="modal-horario-formulario-botones"
            value="Cambiar créditos"
            onClick={props.terminarCambiandoCreditos}
          />
          <input
            className="modal-horario-formulario-botones"
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
