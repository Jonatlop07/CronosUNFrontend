import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { RUTA_SEC_HORARIO_ASIG } from "../../../utilidad/rutas";

import "./estilos/modalAgregarAsignaturas.scss";

const ModalAgregarAsignaturas = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = RUTA_SEC_HORARIO_ASIG;
    history.push(path);
  };
  const [envioFormulario, setEnvioFormulario] = useState({ asignatura: "" });
  const handleInputChange = (event) => {
    setEnvioFormulario({ ...envioFormulario, asignatura: event.target.value });
  };
  const enviarFormulario = async (event) => {
    event.preventDefault();
    let texto = envioFormulario.asignatura;
    texto = texto.split(" ");
    const js = analisisTexto(texto);
    event.target.reset();
    const bearer = "Bearer" + props.auth;
    const asignatura = await fetch(
      `http://localhost:8080/asignaturaOpciones/registro`,
      {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: js,
      }
    ).then((respuesta) => respuesta.json());
  };
  const analisisTexto = (texto) => {
    console.log(texto);
    let resultado = "";
    for (let i = 8; i <= texto[9].length; i++) {
      if (texto[9][i] != undefined) {
        resultado = resultado.concat(texto[9][i]);
      }
    }
    let j = 10;
    while (texto[j][0] != "(") {
      resultado = resultado.concat(" ");
      resultado = resultado.concat(texto[j]);
      j++;
    }
    console.log(resultado);
    j = j + 2;
    let i = 0;
    while (texto[j][i] != "é") {
      i++;
    }
    let creditos = texto[j][i + 7];
    let grupos = [];
    while (texto[j] != "Grupo") {
      j++;
    }
    while (texto[j] != "Nacional") {
      if (texto[j] == "Grupo") {
        let grupo = { numero: 0, contenido: "" };
        grupo.numero = texto[j + 1][0];
        while (texto[j] != "disponibles:") {
          grupo.contenido = grupo.contenido.concat(" ");
          grupo.contenido = grupo.contenido.concat(texto[j]);
          j++;
        }
        grupos.push(grupo);
      }
      j++;
    }
    return JSON.stringify({
      nombre: resultado,
      creditos: creditos,
      grupos: grupos,
      idUsuario: 1,
    });
  };
  const restablecerAsignaturas = async () => {
    const asignatura = await fetch(
      `http://localhost:8080/asignaturaOpciones/restablecer?idUsuario=${1}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((respuesta) => respuesta.json());
  };
  return ReactDOM.createPortal(
    <div className="contenedor-modal-agregar-asignatura">
      <div className="modal-agregar-asignatura">
        <h3 className="modal-agregar-asignatura-titulo">
          Inscripción de Asignaturas
        </h3>
        <form
          className="modal-agregar-asignatura-formulario"
          onSubmit={enviarFormulario}
        >
          <textarea
            className="modal-agregar-asignatura-formulario-campotexto"
            onChange={handleInputChange}
            placeholder="Ingresa la información de la materia"
          />
          <div className="modal-agregar-asignatura-formulario-botones">
            <input
              type="submit"
              className="modal-agregar-asignatura-formulario-botones-nueva-asignatura"
              value="Agregar nueva asignatura"
            />
            <input
              type="submit"
              className="modal-agregar-asignatura-formulario-botones-finalizar"
              value="Finalizar"
              onClick={routeChange}
            />
          </div>
        </form>
        <input
          type="submit"
          className="modal-agregar-asignatura-formulario-botones-restablecer"
          value="Restablecer Asignaturas"
          onClick={restablecerAsignaturas}
        />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalAgregarAsignaturas;
