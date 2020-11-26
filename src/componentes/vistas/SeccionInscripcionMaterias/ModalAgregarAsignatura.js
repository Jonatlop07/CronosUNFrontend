import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./estilos/modalAgregarAsignaturas.scss";

const ModalAgregarAsignaturas = (props) => {
   const [envioFormulario, setEnvioFormulario] = useState({ asignatura: "" });
   const [envioSpring, setEnvioSpring] = useState();
   const handleInputChange = (event) => {
      setEnvioFormulario({
         ...envioFormulario,
         asignatura: event.target.value,
      });
   };
   const enviarFormulario = (event) => {
      event.preventDefault();
      let texto = envioFormulario.asignatura;
      texto = texto.split(" ");
      analisisTexto(texto);
      event.target.reset();
   };
   const analisisTexto = (texto) => {
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
      console.log(
         JSON.stringify({
            nombre: resultado,
            creditos: creditos,
            grupos: grupos,
         })
      );
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
                     onClick={props.terminarAgregandoAsignaturas}
                  />
               </div>
            </form>
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default ModalAgregarAsignaturas;
