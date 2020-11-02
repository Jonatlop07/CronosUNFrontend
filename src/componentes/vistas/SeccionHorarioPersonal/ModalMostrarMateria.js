import React from "react";
import ReactDOM from "react-dom";
import "./estilos/modalHorario.scss";

const ModalMostrarMateria = (props) => {
  return ReactDOM.createPortal(
    <div className="contenedor-modal-horario">
      <div className="modal-horario">
        <h3 className="modal-horario-titulo">{props.informacionMateriaDia.materiaDia.nombre}</h3>
        <div className="modal-horario-contenido">
          <p className="modal-horario-contenido-texto">
            Días: {props.informacionMateriaDia.materiaDia.dias}
          </p>
          <p className="modal-horario-contenido-texto">
            Horas: {props.informacionMateriaDia.materiaDia.hora}
          </p>
          <p className="modal-horario-contenido-texto">
            Profesor: {props.informacionMateriaDia.materiaDia.profesor}
          </p>
        </div>
        <form className="modal-horario-formulario">
          <input
            type="submit"
            className="modal-horario-formulario-botones"
            value="Aceptar"
            onClick={props.terminarMostrandoInformacionMateria}
          />
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalMostrarMateria;
