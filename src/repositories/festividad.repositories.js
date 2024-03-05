import database from "../config/database.js";

export const getFestividades = () => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM festividad";

    database
      .execute(consQuery)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
};
export const getbyIdFestividades = (id) => {
  return new Promise((resolve, reject) => {
    const consQuery = "SELECT * FROM festividad where idfestividad = ?";
    database
      .execute(consQuery, [id])
      .then((result) => {
       
        resolve(result[0]);
      })
      .catch((err) => reject(err));
  });
};

export const PostFestividades = (id,nombre,fechaInicio,descripcion,fechaFin) => {
    return new Promise((resolve, reject) => {
       const consQuery = "INSERT INTO festividad (idfestividad,nombreFestividad,fechaInicio,descripcion,fechaFin) values (?,?,?,?,?)";
      database
        .execute(consQuery, [id,nombre,fechaInicio,descripcion,fechaFin])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };

export const putFestividades = (id,nombre,fechaInicio,descripcion,fechaFin) => {
    return new Promise((resolve, reject) => {
        const consQuery = "UPDATE festividad SET nombreFestividad = ?, fechaInicio = ?, descripcion = ?, fechaFin = ? WHERE idfestividad = ?";
       database
         .execute(consQuery, [id,nombre,fechaInicio,descripcion,fechaFin])
         .then((result) => {
           resolve(result);
         })
         .catch((err) => reject(err));
     });
}
export const DeleteFestividad = (id) => {
    return new Promise((resolve, reject) => {
        const consQuery = "DELETE FROM festividad WHERE idfestividad = ?";
       database
         .execute(consQuery, [id])
         .then((result) => {
           resolve(result);
         })
         .catch((err) => reject(err));
     });
}