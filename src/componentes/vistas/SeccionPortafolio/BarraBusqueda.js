import React, { useState } from "react";

const BarraBusqueda = (props) => {
   const [textoBusqueda, setTextoBusqueda] = useState("");

   return (
      <div className="barra-busqueda">
         <form className="barra-busqueda-formulario">
            <input
               className="barra-busqueda-campo"
               placeholder="Nombre o correo de usuario"
               value={textoBusqueda}
               onChange={(e) => setTextoBusqueda(e.currentTarget.value)}
               required
            />
            <button type="submit" className="barra-busqueda-boton">
               <i className="fas fa-search"></i> Buscar
            </button>
         </form>
      </div>
   );
};

export default BarraBusqueda;
