export function getNombreFestividadesDto(festividad){
    console.log(festividad)
    const arr = [];
    festividad.forEach(element => arr.push({
        NombreFestividad: element.nombreFestividad || "",
       
    }));
    return arr;

}