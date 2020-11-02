
import React from 'react';

import "./estilos/seccionInicio.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import ImagenLogo from "../../../imagenes/img_logo.png";
import dairy from "../../../imagenes/diary.png";
import gato from "../../../imagenes/gato.png";
import portfolio from "../../../imagenes/portfolio.png";

const SeccionInicio = (props) => {
    return ( 
        <div className="seccion-inicio">       
            <div className = "header-Inicio">           
                <img className = "header-Inicio__imagen" src={ImagenLogo} alt ="Logo CronosUN" />
                <Link to="sec2" smooth={true} duration={1000}><section className = "header-Inicio__scroller"></section></Link>
            </div>
           
            <main>
                <section className="inicio" id="sec2">
                        <section className ="inicio__contenedor1">
                        <p className = "inicio__contenedor1__p"> Orientado a facilitar la creación de tu horario
                        de inscripción y a partir de este, la creación de horarios de estudio para que puedas organizar tu tiempo de manera
                        fácil y rápida. </p>
                        </section>
                        <section className ="inicio__contenedor2">
                        <img className = "inicio__contenedor2__img" src={gato} alt ="Imagen calendario"/>
                        </section>
                </section>
                <section className="inicio2">
                        <section className ="inicio2__contenedor1"> <p className = "inicio2__contenedor1__par"> CronosUN te permite crear y guardar proyectos,
                        los cuales puedes subir a tu portafolio, y mostrarlo a los demas si así lo deseas. </p>
                        </section>
                        <section className ="inicio2__contenedor2"><img className = "inicio2__contenedor2__imag" src={portfolio} alt ="Imagen organizador"/>
                        </section>
                </section>
                <section className="inicio">   
                        <section className ="inicio__contenedor1">      
                        <p className = "inicio__contenedor1__p"> Te otorgamos un diario personal, para registrar los avances hechos cada día
                        o cualquier tipo de acontecimientos sucedidos. ¡Y puedes hacer busquedas en este con un par de clicks!</p>
                        </ section> 
                        <section className ="inicio__contenedor2">
                        <img className = "inicio__contenedor2__img" src={dairy} alt = "Imagen diario"/>
                        </section>
                </section>

                <section className="empieza-ya">
                    <a className="empieza-ya__prueba" href ="#!"> ¡Empieza a organizarte ahora!
                    <span className="empieza-ya__span"><i className="fas fa-hourglass-start"></i> </span>
                    </a>
                </section>

            </main>
            
            <footer className = "footer">
                <h3 className = "footer__contactanos"> Contáctanos</h3>
                <div className="footer__contacto"> 
                    <div className= "footer__contacto__facebook">
                        <i className="fab fa-facebook-square"></i> Facebook
                        <div> <a className="footer__texto-secundario" href = "#!">CronosUN</a> </div>
                    </div>
                    <div className= "footer__contacto__correo">
                        <i className="far fa-envelope"></i> Email
                        <div className = "footer__texto-secundario">uncronos@gmail.com</div>
                    </div>
                </div>
            </footer>      
        </div>
    );
}
 
export default SeccionInicio;
