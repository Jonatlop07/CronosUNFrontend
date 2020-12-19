import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import BarraNavegacion from "./BarraNavegacion.js";
import InicioDeSesion from "./vistas/InicioDeSesion/InicioDeSesion.js";
import Registro from "./vistas/Registro/Registro.js";
import RecuperacionClave from "./vistas/RecuperacionClave/RecuperacionClave.js";
import SeccionInicio from "./vistas/SeccionInicio/SeccionInicio.js";
import SeccionCuentaUsuario from "./vistas/SeccionCuentaUsuario/SeccionCuentaUsuario.js";
import SeccionHorarioAsignaturas from "./vistas/SeccionHorarioAsignaturas/SeccionHorarioAsignaturas.js";
import SeccionHorarioPersonal from "./vistas/SeccionHorarioPersonal/SeccionHorarioPersonal.js";
import SeccionPortafolio from "./vistas/SeccionPortafolio/SeccionPortafolio.js";
import SeccionConsultaPortafolio from "./vistas/SeccionConsultaPortafolio/SeccionConsultaPortafolio.js";
import SeccionInscripcionMaterias from "./vistas/SeccionInscripcionMaterias/SeccionInscripcionMaterias.js";
import SeccionEditor from "./vistas/SeccionEditor/SeccionEditor";
import VisualizacionProyecto from "./vistas/SeccionPortafolio/ComponentesPortafolio/VisualizacionProyecto.js";
import PieDePagina from "./PieDePagina.js";

import Api from "../servicios/Api.js";

import "./estilos/app.scss";

import {
   RUTA_INICIO,
   RUTA_INICIO_SESION,
   RUTA_REGISTRO,
   RUTA_REC_CLAVE,
   RUTA_CUENTA_USUARIO,
   RUTA_SEC_HORARIO_ASIG,
   RUTA_SEC_HORARIO_PERSONAL,
   RUTA_SEC_PORTAFOLIO,
   RUTA_SEC_VISUALIZACION_PROYECTO,
   RUTA_SEC_PROYECTOS_PUBLICOS,
   RUTA_SEC_EDITOR,
   RUTA_SEC_INSCRIPCION_MATERIAS,
} from "../utilidad/rutas.js";

function App() {
   const history = useHistory();

   const [auth, setAuth] = useState({
      api: new Api(),
      usuario: null,
   });

   const autenticar = (jwttoken, usuario) => {
      setAuth((anteriorAuth) => {
         anteriorAuth.api.token = jwttoken;
         return {
            api: anteriorAuth.api,
            usuario,
         };
      });
   };

   const cerrarSesion = () => {
      setAuth((anteriorAuth) => {
         anteriorAuth.api.token = null;
         return {
            api: anteriorAuth.api,
            usuario: null,
         };
      });
   };

   return (
      <div className="App">
         <BarraNavegacion auth={auth} cerrarSesion={cerrarSesion} />
         <Switch>
            <Route exact path={RUTA_INICIO_SESION}>
               {auth.api.token ? (
                  <Redirect to={RUTA_INICIO} />
               ) : (
                  <InicioDeSesion auth={auth} autenticar={autenticar} />
               )}
            </Route>
            <Route exact path={RUTA_REGISTRO}>
               {auth.api.token ? (
                  <Redirect to={RUTA_INICIO} />
               ) : (
                  <Registro auth={auth} autenticar={autenticar} />
               )}
            </Route>
            <Route exact path={RUTA_REC_CLAVE}>
               {auth.api.token ? (
                  <Redirect to={RUTA_REC_CLAVE} />
               ) : (
                  <RecuperacionClave auth={auth} />
               )}
            </Route>
            <Route exact path={RUTA_INICIO}>
               <SeccionInicio />
            </Route>
            <Route exact path={RUTA_CUENTA_USUARIO}>
               {auth.api.token ? (
                  <SeccionCuentaUsuario
                     auth={auth}
                     cerrarSesion={cerrarSesion}
                  />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
            <Route exact path={RUTA_SEC_HORARIO_ASIG}>
               {auth.api.token ? (
                  <SeccionHorarioAsignaturas auth={auth} />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
            <Route exact path={RUTA_SEC_HORARIO_PERSONAL}>
               {auth.api.token ? (
                  <SeccionHorarioPersonal auth={auth} />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
            <Route exact path={RUTA_SEC_PORTAFOLIO}>
               {auth.api.token ? (
                  <SeccionPortafolio auth={auth} />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
            <Route exact path={RUTA_SEC_VISUALIZACION_PROYECTO}>
               {auth.api.token ? (
                  <VisualizacionProyecto auth={auth} />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
            <Route exact path={RUTA_SEC_PROYECTOS_PUBLICOS}>
               {auth.api.token ? (
                  <SeccionConsultaPortafolio auth={auth} />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
            <Route exact path={RUTA_SEC_INSCRIPCION_MATERIAS}>
               {auth.api.token ? (
                  <SeccionInscripcionMaterias auth={auth} />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
            <Route exact path={RUTA_SEC_EDITOR}>
               {auth.api.token ? (
                  <SeccionEditor auth={auth} />
               ) : (
                  <Redirect to={RUTA_INICIO_SESION} />
               )}
            </Route>
         </Switch>
         <PieDePagina />
      </div>
   );
}
export default App;
