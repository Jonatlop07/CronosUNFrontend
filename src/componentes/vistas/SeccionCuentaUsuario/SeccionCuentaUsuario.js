import React, { useState, useEffect } from "react";

import ImagenCuentaPorDefecto from "./Default.svg.png";
import "./estilos/seccionCuentaUsuario.scss";

const SeccionCuentaUsuario = (props) => {
  const idUsario = props.idUsuario;

  const [nombre, setNombre] = useState("");
  const [alias, setAlias] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [biografia, setBiografia] = useState("");

  const obtenerInformacion = async () => {
    const bearer = "Bearer " + props.auth;
    const informacion = await fetch(
      `http://localhost:8080/informacionUsuario?id=${idUsario}`,
      {
        method: "GET",
        headers: {
          "Authorization": bearer,
          "Content-Type": "application/json"
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

  const handleInputChangeNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleInputChangeAlias = (event) => {
    setAlias(event.target.value);
  };
  const handleInputChangeCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const handleInputChangeClave = (event) => {
    setClave(event.target.value);
  };
  const handleInputChangeBiografia = (event) => {
    setBiografia(event.target.value);
  };

  const modificarUsuario = async (event) => {
    event.preventDefault();
    const informacionmodificada = await fetch(
      `http://localhost:8080/modificacionUsuario`,
      {
        method: "PUT",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: props.auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idUsario,
          nombre: nombre,
          correo: correo,
          clave: clave,
          alias: alias,
          biografia: biografia,
        }),
      }
    ).then((respuesta) => respuesta.json());
    setNombre(informacionmodificada.nombre);
    setAlias(informacionmodificada.alias);
    setCorreo(informacionmodificada.correo);
    setClave(informacionmodificada.clave);
    setBiografia(informacionmodificada.biografia);
    console.log(informacionmodificada);
  };

  const eliminarUsuario = async (event) => {
    event.preventDefault();
    const respuesta = await fetch(
      `http://localhost:8080/EliminacionUsuario?id=${idUsario}`,
      {
        method: "DELETE",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: props.auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: "idUsario",
        }),
      }
    );
    console.log(respuesta);
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
            <p className="vista-cuenta-nombreUsuario">{nombre}</p>
            <button className="vista-cuenta-boton" type="submit">
              Actualizar Imagen
            </button>
          </div>
        </div>

        <form className="editar-cuenta" onSubmit={modificarUsuario}>
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
                onChange={handleInputChangeNombre}
                type="text"
                name="nombre"
                value={nombre}
                className="editar-cuenta-contenedor-parametro-entrada"
              ></input>
              <input
                onChange={handleInputChangeAlias}
                type="text"
                name="alias"
                value={alias}
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                onChange={handleInputChangeCorreo}
                type="text"
                name="correo"
                value={correo}
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                onChange={handleInputChangeClave}
                type="text"
                name="clave"
                value={clave}
                className="editar-cuenta-contenedor-parametro-entrada"
              />
              <input
                onChange={handleInputChangeBiografia}
                type="text"
                name="biografia"
                value={biografia}
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
        <button
          onClick={eliminarUsuario}
          className="eliminar-perfil-boton"
          type="submit"
        >
          Eliminar Perfil
        </button>
      </div>
    </div>
  );
};

export default SeccionCuentaUsuario;
