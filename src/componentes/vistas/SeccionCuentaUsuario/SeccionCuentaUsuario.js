import React, { useState, useEffect } from "react";

import ImagenCuentaPorDefecto from "./Default.svg.png";
import "./estilos/seccionCuentaUsuario.scss";

const SeccionCuentaUsuario = (props) => {
  const [nombre, setNombre] = useState("");
  const [alias, setAlias] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [biografia, setBiografia] = useState("");

  const obtenerInformacion = async () => {
    const informacion = await fetch(
      `http://localhost:8080/informacionUsuario?id=1`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((respuesta) => respuesta.json());
    setNombre(informacion.nombre);
    setAlias(informacion.alias);
    setCorreo(informacion.correo);
    setClave(informacion.clave);
    setBiografia(informacion.biografia);
    console.log(informacion);
  };
  useEffect(() => {
    obtenerInformacion();
  }, []);
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
                placeholder={nombre}
                className="editar-cuenta-contenedor-parametro-entrada"
              ></input>
              <input
                type="text"
                name="Nombre de Usuario"
                placeholder={alias}
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="Correo"
                placeholder={correo}
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="clave"
                placeholder={clave}
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                type="text"
                name="Biografia"
                placeholder={biografia}
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
