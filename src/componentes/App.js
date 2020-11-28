import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

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
import PieDePagina from "./PieDePagina.js";

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
  RUTA_SEC_PROYECTOS_PUBLICOS,
  RUTA_SEC_EDITOR,
  RUTA_SEC_INSCRIPCION_MATERIAS,
} from "../utilidad/rutas.js";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <BarraNavegacion />
      <Switch>
        <Route exact path={RUTA_INICIO_SESION}>
          <InicioDeSesion auth={setToken} />
        </Route>
        <Route exact path={RUTA_REGISTRO}>
          <Registro />
        </Route>
        <Route exact path={RUTA_REC_CLAVE}>
          <RecuperacionClave />
        </Route>
        <Route exact path={RUTA_INICIO}>
          <SeccionInicio />
        </Route>
        <Route exact path={RUTA_CUENTA_USUARIO}>
          <SeccionCuentaUsuario auth={token} />
        </Route>
        <Route exact path={RUTA_SEC_HORARIO_ASIG}>
          <SeccionHorarioAsignaturas />
        </Route>
        <Route exact path={RUTA_SEC_HORARIO_PERSONAL}>
          <SeccionHorarioPersonal />
        </Route>
        <Route exact path={RUTA_SEC_PORTAFOLIO}>
          <SeccionPortafolio />
        </Route>
        <Route exact path={RUTA_SEC_PROYECTOS_PUBLICOS}>
          <SeccionConsultaPortafolio />
        </Route>
        <Route exact path={RUTA_SEC_INSCRIPCION_MATERIAS}>
          <SeccionInscripcionMaterias />
        </Route>
        <Route exact path={RUTA_SEC_EDITOR}>
          <SeccionEditor />
        </Route>
      </Switch>
      <PieDePagina />
    </div>
  );
}

export default App;
