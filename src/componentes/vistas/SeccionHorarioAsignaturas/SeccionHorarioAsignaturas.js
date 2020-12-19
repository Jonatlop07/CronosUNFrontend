import React, { useState, useEffect } from "react";
import ContenedorHorario from "./ContenedorHorario.js";
import ContenedorAsignaturas from "./ContenedorAsignaturas.js";
import { useHistory } from "react-router-dom";
import { RUTA_SEC_HORARIO_PERSONAL } from "../../../utilidad/rutas.js";
import "./estilos/seccionHorarioAsignaturas.scss";

const SeccionHorarioAsignaturas = (props) => {
   const usuario = props.auth.usuario;
   const api = props.auth.api;
   const history = useHistory();

   const [horarioActualizado, setHorarioActualizado] = useState([]);
   const [materiasEliminadas, setMateriasEliminadas] = useState([]);
   const [asignaturasOpciones, setAsignaturasOpciones] = useState([]);
   const [horarioEnvio, setHorarioEnvio] = useState([]);

   const routeChange = () => {
      let pathname = RUTA_SEC_HORARIO_PERSONAL;
      history.push({ pathname, horarioEnvio });
   };

   const cargarAsignaturas = async () => {
      const respuesta = await api.cargarAsignaturas(usuario.id);
      if (respuesta.ok) {
         const asignaturas = await respuesta.json();
         setAsignaturasOpciones(asignaturas);
      } else {
      }
   };

   const establecerHorario = async () => {};

   const agregarAsignatura = (materia, grupo) => {
      const horarioAux = [...horarioActualizado];
      horarioAux.push({ materia, grupo });
      setHorarioActualizado(horarioAux);
   };

   const desagregarAsignatura = (materia, grupo) => {
      const materiasAux = [...materiasEliminadas];
      materiasAux.push({ materia, grupo });
      setMateriasEliminadas(materiasAux);
   };

   useEffect(() => {
      cargarAsignaturas();
   }, [cargarAsignaturas]);

   return (
      <div className="contenedor-seccion">
         <h5 className="contenedor-seccion-titulo">
            Mi horario de Inscripción
         </h5>
         <ContenedorHorario
            horarioActualizado={horarioActualizado}
            setHorarioEnvio={setHorarioEnvio}
            materiasEliminadas={materiasEliminadas}
         />
         <input
            type="submit"
            value="Guardar Horario"
            className="contenedor-seccion-boton-agregar"
            onClick={routeChange}
         />
         <ContenedorAsignaturas
            ListaMaterias={asignaturasOpciones}
            agregarAsignatura={agregarAsignatura}
            desagregarAsignatura={desagregarAsignatura}
         />
      </div>
   );
};

export default SeccionHorarioAsignaturas;
