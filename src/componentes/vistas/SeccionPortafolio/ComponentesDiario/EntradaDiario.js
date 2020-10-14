import React from "react";

import "./estilos/entradaDiario.scss";

const EntradaDiario = (props) => {
   return (
      <div>
         <p>
            {props.fecha}-{props.hora}
         </p>
         <button>Borrar</button>
         <p>{props.texto}</p>
      </div>
   );
};

export default EntradaDiario;
