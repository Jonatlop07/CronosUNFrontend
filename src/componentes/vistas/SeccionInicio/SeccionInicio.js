
import React from 'react';

import "./estilos/seccionInicio.scss";

const SeccionInicio = (props) => {
    return ( 
        <div>
           <header>
                <div class = "header-Inicio">           
                    <img class = "header-Inicio__imagen" src="https://storage.pixteller.com/designs/designs-images/2020-10-19/12/thereal-1-5f8caf77ad4a8.png" alt ="Logo CronosUN" />
               </div>
           </header>

            <main>
                <section class="inicio">
                        <p class = "inicio__p"> <span class = "inicio__CronosW">Cronos</span><span class="inicio__UN">UN</span> está orientado a facilitar la creación de tu horario
                        de inscripción y a partir de este, crear horarios de estudio para que puedas organizar tu tiempo de manera
                        fácil y rápida. </p>
                        <img class = "inicio__img" src="https://storage.pixteller.com/designs/designs-images/2020-10-19/03/gatitobonito-1-5f8cd8d665c90.png" alt ="Imagen calendario"/>
                        </section>
                <section class="inicio2">
                        <p class = "inicio2__p"> Además, <span class = "inicio2__CronosW">Cronos</span><span class="inicio2__UN">UN</span> te permite crear y guardar proyectos,
                        los cuales puedes subir a tu portafolio, y mostrarlo a los demas si así lo deseas. </p>
                        <img class = "inicio2__img" src="https://storage.pixteller.com/designs/designs-images/2020-10-19/01/portfolio-1-5f8cc34061538.png" alt ="Imagen organizador"/>
                        </section>
                <section class="inicio">       
                        <p class= "inicio__p"> También puedes tener un diario personal, para registrar los avances hechos en un día
                        o cualquier tipo de acontecimientos sucedidos y por supuesto, <span class = "inicio__CronosW">Cronos</span><span class="inicio__UN">UN</span> te ayudará 
                        a realizar busquedas de lo escrito en tu diario cuando lo desees. </p>
                        <img class= "inicio__img" src="https://storage.pixteller.com/designs/designs-images/2020-10-19/01/wip-1-5f8cc83051c18.png" alt = "Imagen diario"/>
                
                </section>

                <section class="empieza-ya">
                    <a class="empieza-ya__prueba" href ="#!"> ¡Empieza a organizarte ahora!
                    <span class="empieza-ya__span"><i class="fas fa-hourglass-start"></i> </span>
                    </a>
                </section>

            </main>
            
            <footer class = "footer">
                <h3 class = "footer__contactanos"> Contáctanos</h3>
                <div class="footer__contacto"> 
                    <div class= "footer__contacto__facebook">
                        <i class="fab fa-facebook-square"></i> Facebook
                        <div> <a class="footer__texto-secundario" href = "#!">CronosUN</a> </div>
                    </div>
                    <div class= "footer__contacto__correo">
                        <i class="far fa-envelope"></i> Email
                        <div class = "footer__texto-secundario">uncronos@gmail.com</div>
                    </div>
                </div>
            </footer>

            
        </div>
     );
}
 
export default SeccionInicio;
