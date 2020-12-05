import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
   RUTA_SEC_EDITOR,
   RUTA_SEC_VISUALIZACION_PROYECTO,
} from "../../../../utilidad/rutas.js";

const Proyecto = ({ datos, actualizarProyecto }) => {
   const [estado, setEstado] = useState(datos.estado);

   const history = useHistory();

   const consultarProyecto = (e) => {
      e.preventDefault();
      history.push({
         pathname: RUTA_SEC_VISUALIZACION_PROYECTO,
         idProyecto: datos.id,
      });
   };

   const editarProyecto = (e) => {
      e.preventDefault();
      history.push({ pathname: RUTA_SEC_EDITOR, idProyecto: datos.id });
   };

   const cambiarEstado = async (e) => {
      const datosProyecto = datos,
         idProyecto = datos.id;
      datosProyecto.estado = e.currentTarget.value;
      delete datosProyecto.id;
      actualizarProyecto(idProyecto, datosProyecto);
      setEstado(e.currentTarget.value);
   };

   const cambiarPrivacidad = async (e) => {
      const datosProyecto = datos,
         idProyecto = datos.id;
      datosProyecto.privacidad = e.currentTarget.checked;
      delete datosProyecto.id;
      console.log(datosProyecto);
      actualizarProyecto(idProyecto, datosProyecto);
   };

   return (
      <section className="proyecto">
         <h5 className="proyecto-titulo" onClick={consultarProyecto}>
            {datos.titulo}
         </h5>
         {datos.descripcion && (
            <p className="proyecto-descripcion">{datos.descripcion}</p>
         )}
         {datos.imagenFondo && (
            <figure
               className="proyecto-imagen"
               style={{ backgroundImage: `url(${datos.imagenFondo})` }}
            >
               <img />
            </figure>
         )}
         <div className="proyecto-opciones">
            <i
               className="proyecto-opciones-editar fad fa-edit"
               onClick={editarProyecto}
            ></i>
            <select
               className="proyecto-opciones-estado"
               value={estado}
               onChange={cambiarEstado}
            >
               <option value="Finalizado">Finalizado</option>
               <option value="En progreso">En progreso</option>
               <option value="Incompleto">Incompleto</option>
            </select>

            <label className="proyecto-opciones-privacidad">
               <input
                  className="proyecto-opciones-privacidad-caja-seleccion"
                  type="checkbox"
                  onChange={cambiarPrivacidad}
                  checked={datos.privacidad}
               />
               <span className="proyecto-opciones-privacidad-deslizador"></span>
               <label className="proyecto-opciones-privacidad-etiqueta">
                  {datos.privacidad ? "Privado" : "Público"}
               </label>
            </label>
         </div>
      </section>
   );
};

export default Proyecto;
