import React from "react";
import ImagenCuentaPorDefecto from "./Default.svg.png";
import "./estilos/seccionCuentaUsuario.scss";

const SeccionCuentaUsuario = (props) => {
  return (
    <div>
      <div className="contenedor">
        <div className="vista">
          <div className="vista-cuenta">
            <img className="vista-cuenta-imagen" src={ImagenCuentaPorDefecto} />
            <p className="vista-cuenta-nombreUsuario">Nombre de Usuario</p>
            <button className="vista-cuenta-boton" type="submit">
              Actualizar Imagen
            </button>
          </div>
        </div>

        <form className="editar-cuenta">
          <div className="editar-cuenta-contenedor">
            <div className="editar-cuenta-contenedor-etiqueta">
              <label className="editar-cuenta-contenedor-etiqueta-nombre">
                Nombre
              </label>
              <label className="editar-cuenta-contenedor-etiqueta-nombre">
                Apellido
              </label>
              <label className="editar-cuenta-contenedor-etiqueta-nombre">
                Nombre de Usuario
              </label>
              <label className="editar-cuenta-contenedor-etiqueta-nombre">
                Correo
              </label>
              <label className="editar-cuenta-contenedor-etiqueta-nombre">
                Contraseña
              </label>
              <label className="editar-cuenta-contenedor-etiqueta-nombre">
                Biografia
              </label>
            </div>
            <div className="editar-cuenta-contenedor-parametro">
              <input
                type="text"
                name="Nombre"
                placeholder="NombreEjemplo"
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="Apellido"
                placeholder="ApellidoEjemplo"
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="Nombre de Usuario"
                placeholder="Nombre1234ejemplo"
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="Correo"
                placeholder="nombreEjemplo@correo.com"
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="clave"
                placeholder="***********"
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="Biografia"
                placeholder="Describete a ti mismo!"
                className="editar-cuenta-contenedor-parametro-entrada"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Guardar"
            className="editar-cuenta-boton-enviar"
          />
        </form>
      </div>
      <div className="eliminar-perfil">
        <button className="eliminar-perfil-boton" type="submit">
          Eliminar Perfil
        </button>
      </div>
    </div>
  );
};

export default SeccionCuentaUsuario;
