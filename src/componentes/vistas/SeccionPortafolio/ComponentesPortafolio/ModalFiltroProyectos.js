import React, { useState } from "react";

import "./estilos/modalFiltroProyectos.scss";

import { obtenerFechaActual } from "../../../../utilidad/funcionesFechaYHora.js";

const ModalFiltroProyectos = (props) => {
   const [filtroPorNombre, setFiltroPorNombre] = useState(false);
   const [filtroPorFecha, setFiltroPorFecha] = useState(false);
   const [filtroPorEstado, setFiltroPorEstado] = useState(false);
   const [filtroPorPrivacidad, setFiltroPorPrivacidad] = useState(false);
   const [filtroPorCategoria, setFiltroPorCategoria] = useState(false);

   const [nombreProyecto, setNombreProyecto] = useState("");

   const [fechaInicial, setFechaInicial] = useState(obtenerFechaActual());
   const [fechaFinal, setFechaFinal] = useState(obtenerFechaActual());

   const [estadoProyecto, setEstadoProyecto] = useState("");

   const [esPublico, setEsPublico] = useState(false);

   const [categorias, setCategorias] = useState([]);

   const manejarFiltroPorNombre = () => {
      setFiltroPorNombre(!filtroPorNombre);
   };

   const manejarFiltroPorFecha = () => {
      setFiltroPorFecha(!filtroPorFecha);
   };

   const manejarFiltroPorEstado = () => {
      setFiltroPorEstado(!filtroPorEstado);
   };

   const manejarFiltroPorPrivacidad = () => {
      setFiltroPorPrivacidad(!filtroPorPrivacidad);
   };

   const manejarFiltroPorCategoria = () => {
      setFiltroPorCategoria(!filtroPorCategoria);
   };

   const terminarFiltroProyectos = () => {
      props.terminarFiltroProyectos();
   };

   return (
      <div>
         <h5>Filtrar Proyectos del Portafolio</h5>
         <label>
            <input type="checkbox" onChange={manejarFiltroPorNombre} />
            Por nombre:
         </label>
         <label>
            Nombre del proyecto:
            <input />
         </label>
         <label>
            <input type="checkbox" onChange={manejarFiltroPorFecha} />
            Por fecha:
         </label>
         <label>
            Fecha inicial:
            <input
               type="date"
               value={fechaInicial}
               onChange={(e) => setFechaInicial(e.currentTarget.value)}
            />
         </label>
         <label>
            Fecha final:
            <input
               type="date"
               value={fechaInicial}
               onChange={(e) => setFechaFinal(e.currentTarget.value)}
            />
         </label>
         <label>
            <input type="checkbox" onChange={manejarFiltroPorEstado} />
            Por estado:
         </label>
         <label>
            Estado:
            <select>
               <option>Finalizado</option>
               <option>En progreso</option>
               <option>Incompleto</option>
            </select>
         </label>
         <label>
            <input type="checkbox" onChange={manejarFiltroPorPrivacidad} />
            Por privacidad:
         </label>
         <label>Privacidad:</label>
         <label>
            <input
               type="radio"
               name="privacidad"
               defaultChecked
               value={!esPublico}
               onChange={(e) => setEsPublico(e.currentTarget.value)}
            />
            Privado:
         </label>
         <label>
            <input
               type="radio"
               name="privacidad"
               value={esPublico}
               onChange={(e) => setEsPublico(e.currentTarget.value)}
            />
            Publico:
         </label>
         <label>
            <input type="checkbox" onChange={manejarFiltroPorCategoria} />
            Por categoría:
         </label>
         <button>Añadir categoría</button>

         <button>Confirmar filtro</button>
         <button onClick={terminarFiltroProyectos}>Cancelar</button>
      </div>
   );
};

export default ModalFiltroProyectos;
