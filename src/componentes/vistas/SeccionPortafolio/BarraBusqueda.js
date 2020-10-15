import React from "react";

import "./estilos/barraBusqueda.scss";

const BarraBusqueda = (props) => {
   return (
      <div>
         <form>
            <input type="submit" value="Buscar" />
            <input placeholder="Nombre de usuario o dirección de correo" />
         </form>
      </div>
   );
};

export default BarraBusqueda;
