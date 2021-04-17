export default class Api {
   constructor(token) {
      this.token = token;
   }

   encabezados = {
      Accept: "application/json",
      "Content-Type": "application/json",
   };

   URL_BASE = "https://cronosun-backend.herokuapp.com/api/v2";

   crearEncabezados() {
      return this.token
         ? {
              ...this.encabezados,
              Authorization: "Bearer " + this.token,
           }
         : this.encabezados;
   }
   async registrarUsuario(datosUsuario) {
      return await fetch(`${this.URL_BASE}/auth/registro`, {
         method: "POST",
         headers: this.crearEncabezados(),
         body: JSON.stringify(datosUsuario),
      });
   }

   async autenticarUsuario(alias, clave) {
      return await fetch(`${this.URL_BASE}/auth/autenticacion`, {
         method: "POST",
         headers: this.crearEncabezados(),
         body: JSON.stringify({
            alias,
            clave,
         }),
      });
   }

   async enviarCorreoRecuperacion(correo) {
      return await fetch(
         `${this.URL_BASE}/usuario/recuperarClave?correo=${correo}`,
         {
            method: "GET",
            headers: this.crearEncabezados(),
         }
      );
   }

   async obtenerInformacionUsuario(idUsuario) {
      return await fetch(`${this.URL_BASE}/usuario/${idUsuario}/cuenta`, {
         method: "GET",
         headers: this.crearEncabezados(),
      });
   }

   async modificarInformacionUsuario(nuevaInformacionUsuario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${nuevaInformacionUsuario.id}/cuenta`,
         {
            method: "PUT",
            headers: this.crearEncabezados(),
            body: JSON.stringify(nuevaInformacionUsuario),
         }
      );
   }

   async eliminarCuentaUsuario(idUsuario) {
      return await fetch(`${this.URL_BASE}/usuario/${idUsuario}/cuenta`, {
         method: "DELETE",
         headers: this.crearEncabezados(),
      });
   }

   async agregarAsignaturaOpcion(idUsuario, textoAnalizado) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/opcionesAsignatura/registro`,
         {
            method: "POST",
            headers: this.crearEncabezados(),
            body: JSON.stringify(textoAnalizado),
         }
      );
   }

   async cargarAsignaturas(idUsuario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/opcionesAsignatura`,
         {
            method: "GET",
            headers: this.crearEncabezados(),
         }
      );
   }

   async restablecerOpcionesAsignatura(idUsuario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/opcionesAsignatura`,
         {
            method: "DELETE",
            headers: this.crearEncabezados(),
         }
      );
   }

   async obtenerEntradasDiario(idUsuario, parametrosFiltro) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/diario`,
         {
            method: "POST",
            headers: this.crearEncabezados(),
            body: JSON.stringify(parametrosFiltro),
         }
      );
   }

   async registrarEntradaDiario(idUsuario, nuevaEntradaDiario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/diario/registro`,
         {
            method: "POST",
            headers: this.crearEncabezados(),
            body: JSON.stringify(nuevaEntradaDiario),
         }
      );
   }

   async eliminarEntradaDiario(idUsuario, idEntrada) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/diario/${idEntrada}`,
         {
            method: "DELETE",
            headers: this.crearEncabezados(),
         }
      );
   }

   async obtenerComentarios(idProyecto, idUsuario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/comentarios/${idProyecto}`,
         {
            method: "GET",
            headers: this.crearEncabezados(),
         }
      );
   }

   async registrarComentario(idUsuario, nuevoComentario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/comentarios`,
         {
            method: "POST",
            headers: this.crearEncabezados(),
            body: JSON.stringify(nuevoComentario),
         }
      );
   }

   async eliminarComentario(idUsuario, idComentario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/comentarios/${idComentario}`,
         {
            method: "DELETE",
            headers: this.crearEncabezados(),
         }
      );
   }

   async obtenerProyectos(idUsuario, parametrosFiltro) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos`,
         {
            method: "POST",
            headers: this.crearEncabezados(),
            body: JSON.stringify(parametrosFiltro),
         }
      );
   }

   async consultarProyecto(idUsuario, idProyecto) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/${idProyecto}`,
         {
            method: "GET",
            headers: this.crearEncabezados(),
         }
      );
   }

   async registrarProyecto(idUsuario, proyecto) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/registro`,
         {
            method: "POST",
            headers: this.crearEncabezados(),
            body: JSON.stringify(proyecto),
         }
      );
   }

   async actualizarProyecto(idUsuario, cambios) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos`,
         {
            method: "PUT",
            headers: this.crearEncabezados(),
            body: JSON.stringify(cambios),
         }
      );
   }

   async eliminarProyecto(idUsuario, idProyecto) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/${idProyecto}`,
         {
            method: "DELETE",
            headers: this.crearEncabezados(),
         }
      );
   }

   async obtenerCategorias(idUsuario) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/categorias`,
         {
            method: "GET",
            headers: this.crearEncabezados(),
         }
      );
   }

   async obtenerPortafolioUsuario(idUsuario, datosPeticion) {
      return await fetch(
         `${this.URL_BASE}/usuario/${idUsuario}/portafolio/proyectos/publicos`,
         {
            method: "POST",
            headers: this.crearEncabezados(),
            body: JSON.stringify(datosPeticion),
         }
      );
   }
}
