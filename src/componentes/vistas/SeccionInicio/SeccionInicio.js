import React from 'react';

import "./estilos/seccionInicio.scss";

const SeccionInicio = (props) => {
    return ( 
        <div>
           <header>
               <div class = "headerInicio"> 
                    <h1 class = "tInicio"> CronosUN </h1>
                    <img class = "imgInicio" src="" alt ="Logo CronosUN" />
               </div>
           </header>

            <main>
                <section class="inicio">
                    <p class = "inicio__pIzq"> <span class = "CronosW">CronosUN</span> está orientado a facilitar la creación de tu horario
                    de inscripción y a partir de este, crear horarios de estudio para que puedas organizar tu tiempo de manera
                    fácil y rápida. </p>
                    <img class = "inicio__imgIzq" src="" alt ="Imagen calendario"/>
                    <p class = "inicio__pder"> Además <span class = "CronosW">CronosUN</span> te permite crear y guardar proyectos,
                    los cuales puedes subir a tu portafolio, y mostrarlo a los demas si así lo deseas. </p>
                    <img class = "inicio__imgDer" src="" alt ="Imagen organizador"/>
                    <p class= "inicio__pIzq"> También puedes tener un diario personal, para registrar los avances hechos en un día
                    o cualquier tipo de acontecimientos sucedidos y por supuesto, <span class = "CronosW">CronosUN</span> te ayudará 
                    a realizar busquedas de lo escrito en tu diario cuando lo desees. </p>
                    <img class= "inicio__imgIzq" src="" alt = "Imagen diario"/>

                    <footer>
                        <h3 class ="ccontacto"> Contacto y solicitudes a:</h3>
                        <a href = "mailto: wnarevalor@unal.edu.co"> wnarevalor@unal.edu.co </a>
                    </footer>
                </section>
            </main>
           
        </div>
     );
}
 
export default SeccionInicio;