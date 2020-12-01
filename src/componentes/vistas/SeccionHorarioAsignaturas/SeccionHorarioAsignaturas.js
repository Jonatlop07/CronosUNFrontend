import React,  { useState, useEffect }  from 'react';
import ContenedorHorario from "./ContenedorHorario.js"
import ContenedorAsignaturas from "./ContenedorAsignaturas.js"
import "./estilos/seccionHorarioAsignaturas.scss";

const SeccionHorarioAsignaturas = (props) => {
    const [horarioActualizado,setHorarioActualizado] = useState([])
    const [materiasEliminadas,setMateriasEliminadas] = useState([])
    const [asignaturasOpciones,setAsignaturasOpciones] = useState([])
    const cargarAsignaturas = async () => {
        const bearer = 'Bearer'+ auth;
        const asignaturas = await fetch(
            `http://localhost:8080/asignaturaOpciones?idUsuario=${1}`,{ 
                withCredentials: true, 
                credentials : 'include',
                headers:{
                    "Authorization": bearer,
                    "Content-Type": "application.json",
                },
            }
        ).then((respuesta) => respuesta.json());
        setAsignaturasOpciones(asignaturas)
    }   
    const agregarAsignatura = (materia,grupo) => {
        const horarioAux = [...horarioActualizado];
        horarioAux.push({materia,grupo})
        setHorarioActualizado(horarioAux)
    }
    const desagregarAsignatura = (materia,grupo) => {
        const materiasAux = [...materiasEliminadas];
        materiasAux.push({materia,grupo})
        setMateriasEliminadas(materiasAux)
    }
    useEffect(()=>{cargarAsignaturas()},[])
    return ( 
        <div className="contenedor-seccion">
            <h5 className="contenedor-seccion-titulo">Mi horario de Inscripción</h5>
            <ContenedorHorario horarioActualizado={horarioActualizado} materiasEliminadas={materiasEliminadas}/>
            <input type="submit" value="Guardar Horario" className="contenedor-seccion-boton-agregar"/>
            <ContenedorAsignaturas ListaMaterias={asignaturasOpciones} agregarAsignatura={agregarAsignatura} desagregarAsignatura={desagregarAsignatura} />
        </div>
     );
}

export default SeccionHorarioAsignaturas;
