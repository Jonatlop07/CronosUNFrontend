import React from "react";

import "./estilos/barraBusqueda.scss";

const BarraBusqueda = (props) => {
   return (
      <div className="barra-busqueda">
         <form>
            <input
               className="barra-busqueda-campo"
               placeholder="Nombre de usuario o dirección de correo"
            />
            <input
               className="barra-busqueda-boton"
               type="submit"
               value="Buscar"
            />
         </form>
      </div>
   );
};

export default BarraBusqueda;
