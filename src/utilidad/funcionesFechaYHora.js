export const obtenerFechaActual = () => {
   const fechaActual = new Date();
   const anio = fechaActual.getFullYear(),
      mes = `0${fechaActual.getMonth()}`.slice(-2),
      dia = `0${fechaActual.getDate()}`.slice(-2);

   return `${anio}-${mes}-${dia}`;
};

export const obtenerHoraActual = () => {
   const hora = `0${new Date().getHours()}`.slice(-2),
      minuto = `0${new Date().getMinutes()}`.slice(-2);

   return `${hora}:${minuto}`;
};
