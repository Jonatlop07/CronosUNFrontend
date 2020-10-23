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
    const agregarAsignatura = (materia,grupo) => {
        const horarioAux = [...horarioActualizado];
        horarioAux.push({materia,grupo})
        setHorarioActualizado(horarioAux)
    }
    const desagregarAsignatura = (materia,grupo) => {
        const horariosAux = [...horarioActualizado]
        for (let i =0; i<horariosAux.length;i++){
            if(horariosAux[i].materia === materia && horariosAux[i].grupo === grupo){
                // horariosAux[i]=NaN
            }
        }
        setHorarioActualizado(horariosAux)
    }
    return ( 
        <div className="contenedor-seccion">
            <ContenedorHorario horarioActualizado={horarioActualizado}/>
            <input type="submit" value="Guardar Horario" className="contenedor-seccion-boton-agregar"/>
            <ContenedorAsignaturas ListaMaterias={ListaMaterias} agregarAsignatura={agregarAsignatura} desagregarAsignatura={desagregarAsignatura}/>
        </div>
     );
}

export default SeccionHorarioAsignaturas;