import zod from "zod";

    const usuario = zod.object({

    correo: zod.string(
        {
        required_error : "correo Usuario es requerido",
        invalid_type_error : "correo Usuario debe ser un texto"
        }
    ),
    contrasena: zod.string(
        {
        required_error : "contraseña Usuario es requerido",
        invalid_type_error : "contraseña Usuario debe ser un texto"
         }
    ),
    
    });

    export const validarUsuario = (usuarios) =>{

     return usuario.safeParse(usuarios)
    }

    export const validarUsuarioParcial = (UsuarioParcial) =>{
        return usuario.partial().safeParse(UsuarioParcial)

    }

