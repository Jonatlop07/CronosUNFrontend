import React,  { useState }  from 'react';
import ContenedorHorario from "./ContenedorHorario.js"
import ContenedorAsignaturas from "./ContenedorAsignaturas.js"
import "./estilos/seccionHorarioAsignaturas.scss";

const ListaMaterias =[{nombre:'Algebra Lineal',creditos:4,grupos:[{hora:'7-9',dias:['Lunes','Miercoles'],profesor:'Jaime'},
                                                                  {hora:'9-11',dias:['Lunes','Miercoles'],profesor:'Juan'},
                                                                  {hora:'9-11',dias:['Martes','Viernes'],profesor:'Juan'}]
                      },
                      {nombre:'Estructuras de Datos',creditos:3,grupos:[{hora:'7-9',dias:['Jueves','Viernes'],profesor:'Jaime'},
                                                                        {hora:'2-4',dias:['Lunes','Miercoles'],profesor:'Juan'}]
                      }]
const SeccionHorarioAsignaturas = (props) => {
    const [horarioActualizado,setHorarioActualizado] = useState([])
    const establecerMateriaElegida = (materia,grupo) => {
        const horarioAux = [...horarioActualizado];
        horarioAux.push({materia,grupo})
        setHorarioActualizado(horarioAux)
        console.log(horarioActualizado)
    }
    return ( 
        <div className="contenedor-seccion">
            <ContenedorHorario horarioActualizado={horarioActualizado}/>
            <input type="submit" value="Agregar asignatura" className="contenedor-seccion-boton-agregar"/>
            <ContenedorAsignaturas ListaMaterias={ListaMaterias} establecerMateriaElegida={establecerMateriaElegida}/>
        </div>
     );
}

export default SeccionHorarioAsignaturas;