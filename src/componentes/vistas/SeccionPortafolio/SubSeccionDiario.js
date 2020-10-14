import React from "react";

const SubseccionDiario = (props) => {
   return (
      <div>
         <PanelDiario cambiarEstadoRegDeEntrada={setRegistrandoEntrada} />
         <ContenedorDiario />
      </div>
   );
};

export default SubseccionDiario;
