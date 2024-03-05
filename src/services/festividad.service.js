import { getFestividades,getbyIdFestividades, PostFestividades, putFestividades, DeleteFestividad } from "../repositories/festividad.repositories.js";
import { getFestividadByIdDto } from "../dtos/getfestividadbyid.dtos.js";
import { getNombreFestividadesDto } from "../dtos/getFestividades.dtos.js";
import { validarFestividad, validarFestividadParcial } from "../validations/festividad.validation.js";
export const getOfFestividades = async () => {
  try {
    const result = await getFestividades();
    return getNombreFestividadesDto(result[0]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getIdFestividad = async (id) => {
  try {
    const result = await getbyIdFestividades(id);
    console.log(result);
    return getFestividadByIdDto(result[0]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const PostofFestividad = async (festividad) => {
   
    const {idfestividad,nombreFestividad,fechaInicio,descripcion,fechaFin} = festividad
    try {
      const festivalidator = validarFestividad(festividad)
      if(festivalidator.success) {
        const result = await PostFestividades(idfestividad,nombreFestividad,fechaInicio,descripcion,fechaFin);
        return result[0];
      }else{
        throw new Error (festivalidator.error.message)
      }
       
     
    } catch (err) {
      throw new Error(err.message);
    }
  };

export const put_Festividades = async (festividadput, id) => {
    try {
        const validationFestividad= validarFestividadParcial(festividadput)
        if (validationFestividad.success) {
            const originalFestividad = await getbyIdFestividades(id)
            const FestividadActualizada ={...originalFestividad[0], ...validationFestividad.data}
            const {nombreFestividad , fechaInicio , descripcion , fechaFin} = FestividadActualizada;
            const Festividad = await putFestividades(nombreFestividad, fechaInicio, descripcion, fechaFin, id)
        return Festividad
        } else {
            throw new Error (validationFestividad.error.message)
        }
        
    } catch (error) {
        throw error;
    }
}
export const delete_Festividad_Service = async (id) => {
    try {
        return await DeleteFestividad(id);
    } catch (error) {
        throw error;
    }
}