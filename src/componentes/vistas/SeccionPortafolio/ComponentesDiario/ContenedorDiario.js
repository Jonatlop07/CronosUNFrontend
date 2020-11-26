import React, { useState } from "react";
import PropTypes from "prop-types";

import EntradaDiario from "./EntradaDiario.js";

const ContenedorDiario = ({ entradasDiario, eliminarEntrada }) => {
   return (
      <div className="contenedor-diario">
         {entradasDiario.map((entradaDiario, indice) => (
            <EntradaDiario
               key={`entrada${indice}`}
               id={entradaDiario.id}
               fecha={entradaDiario.fecha}
               hora={entradaDiario.hora}
               contenido={entradaDiario.contenido}
               eliminarEntrada={eliminarEntrada}
            />
         ))}
      </div>
   );
};

ContenedorDiario.propTypes = {
   entradasDiario: PropTypes.array.isRequired,
};

ContenedorDiario.defaultProps = {
   entradasDiario: [],
};

export default ContenedorDiario;
