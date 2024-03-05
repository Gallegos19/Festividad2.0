import database from "../config/database.js";

export const getUsuario = () => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM Usuario";

    database
      .execute(consQuery)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
};
export const getbyCorreoUsuario = (correo) => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM usuario where correo = ? limit 1";
    database
      .execute(consQuery, [correo])
      .then((result) => {
       
        resolve(result[0]);
      })
      .catch((err) => reject(err));
  });
};

export const PostUsuario = (correo,contrasena) => {
    return new Promise((resolve, reject) => {
       const consQuery = "INSERT INTO usuario (correo,contrasena) values (?,?)";
      database
        .execute(consQuery, [correo,contrasena])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };

export const putUsuario = (id,nombre,fechaInicio,descripcion,fechaFin) => {
    return new Promise((resolve, reject) => {
        const consQuery = "UPDATE usuario SET nombreUsuario = ?, fechaInicio = ?, descripcion = ?, fechaFin = ? WHERE idUsuario = ?";
       database
         .execute(consQuery, [id,nombre,fechaInicio,descripcion,fechaFin])
         .then((result) => {
           resolve(result);
         })
         .catch((err) => reject(err));
     });
}
export const DeleteUsuario = (id) => {
    return new Promise((resolve, reject) => {
        const consQuery = "DELETE FROM usuario WHERE idUsuario = ?";
       database
         .execute(consQuery, [id])
         .then((result) => {
           resolve(result);
         })
         .catch((err) => reject(err));
     });
}