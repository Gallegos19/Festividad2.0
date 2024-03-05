import zod from "zod";

    const festividad = zod.object({
    idfestividad: zod.number(
        {
        required_error : "id festividad es requerido",
        invalid_type_error : "id festividad debe ser un numero"
        }
    ),
    nombreFestividad: zod.string(
        {
        required_error : "nombre festividad es requerido",
        invalid_type_error : "nombre festividad debe ser un texto"
        }
    ),
    descripcion: zod.string(
        {
        required_error : "descripcion festividad es requerido",
        invalid_type_error : "descripcion festividad debe ser un texto"
         }
    ),
    fechaInicio: zod.coerce.date(
        {
            required_error : "fecha Inicio festividad es requerido",
            invalid_type_error : "fecha Inicio festividad debe ser una fecha valida"
        }
    ),
    fechaFin: zod.coerce.date(
        {
            required_error : "fecha Fin festividad es requerido",
            invalid_type_error : "fecha Fin festividad debe ser una fecha valida"
        }
    ),
    });

    export const validarFestividad = (festividades) =>{
     return festividad.safeParse(festividades)
    }

    export const validarFestividadParcial = (festividadParcial) =>{
        return festividad.partial().safeParse(festividadParcial)

    }

