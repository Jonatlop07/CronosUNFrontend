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
            <button type="submit" class="barra-busqueda-boton">
               <i class="fas fa-search"></i> Buscar
            </button>
         </form>
      </div>
   );
};

export default BarraBusqueda;
