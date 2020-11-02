import React,  { useState }  from 'react';
import ContenedorHorario from "./ContenedorHorario.js"
import ContenedorAsignaturas from "./ContenedorAsignaturas.js"
import "./estilos/seccionHorarioAsignaturas.scss";

const ListaMaterias =[{nombre:'Algebra Lineal',creditos:4,grupos:[{hora:'7-9',dias:['Lunes','Miercoles'],profesor:'Jaime Beltran'},
                                                                  {hora:'9-11',dias:['Lunes','Miercoles'],profesor:'Juan Rojas'},
                                                                  {hora:'9-11',dias:['Martes','Viernes'],profesor:'Juan Rojas'}]
                      },
                      {nombre:'Estructuras de Datos',creditos:3,grupos:[{hora:'7-9',dias:['Jueves','Viernes'],profesor:'Liz Capataz'},
                                                                        {hora:'14-16',dias:['Lunes','Miercoles'],profesor:'Santiago Niño'}]
                      }]
const SeccionHorarioAsignaturas = (props) => {
    const [horarioActualizado,setHorarioActualizado] = useState([])
    const [materiasEliminadas,setMateriasEliminadas] = useState([])
    const agregarAsignatura = (materia,grupo) => {
        const horarioAux = [...horarioActualizado];
        /* let booleanAux = false; 
        let j; 
        for (let i =0; i<horarioAux.length;i++){
            if (horarioAux[i].materia === materia){
                booleanAux=true 
                j=i 
            }
        }
        if(booleanAux){
            console.log('entra')
            horarioAux[j]=horarioAux.push({materia,grupo})
        }else{
            console.log('entra')
            horarioAux.push({materia,grupo})
        } */ 
        horarioAux.push({materia,grupo})
        setHorarioActualizado(horarioAux)
    }
    const desagregarAsignatura = (materia,grupo) => {
        const materiasAux = [...materiasEliminadas];
        materiasAux.push({materia,grupo})
        setMateriasEliminadas(materiasAux)
    }
    return ( 
        <div className="contenedor-seccion">
            <h5 className="contenedor-seccion-titulo">Mi horario de Inscripción</h5>
            <ContenedorHorario horarioActualizado={horarioActualizado} materiasEliminadas={materiasEliminadas}/>
            <input type="submit" value="Guardar Horario" className="contenedor-seccion-boton-agregar"/>
            <ContenedorAsignaturas ListaMaterias={ListaMaterias} agregarAsignatura={agregarAsignatura} desagregarAsignatura={desagregarAsignatura} />
        </div>
     );
}

export default SeccionHorarioAsignaturas;
