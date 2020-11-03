import React, { useState } from "react";
import ModalEditarCreditos from "./ModalEditarCreditos";

const ItemHorarioPersonal = (props) => {
   const [cambiandoCreditos, setCambiandoCreditos] = useState(false);
   const [creditos, setCreditos] = useState(props.creditos);

   const terminarCambiandoCreditos = () => {
      setCambiandoCreditos(false);
   };

   return (
      <li className="lista">
         <div className="contenedor-seccion-horario-personal-funciones-creditos-materias">
            <h5 className="contenedor-seccion-horario-personal-funciones-creditos-materias-indiv1">
               {props.nombre}
            </h5>
            <h5 className="contenedor-seccion-horario-personal-funciones-creditos-materias-indiv2">
               {props.creditos} créditos
            </h5>
            <button
               onClick={() => {
                  setCambiandoCreditos(true);
               }}
               className="contenedor-seccion-horario-personal-funciones-creditos-materias-boton"
            >
               Cambiar créditos{" "}
            </button>
            {cambiandoCreditos && (
               <ModalEditarCreditos
                  nombre={props.nombre}
                  cambiarCreditos={setCreditos}
                  terminarCambiandoCreditos={terminarCambiandoCreditos}
               />
            )}
         </div>
      </li>
   );
};

export default ItemHorarioPersonal;
