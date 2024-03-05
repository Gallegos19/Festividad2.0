
export function getFestividadByIdDto(festividad){
 
    return {
        NombreFestividad: festividad.nombreFestividad || "",
        Descripcion: festividad.descripcion || "",
    }
}
