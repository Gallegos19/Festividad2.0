import { validarUsuario } from "../validations/usuario.validation.js";
import { PostUsuario , getbyCorreoUsuario} from "../repositories/usuario.repositories.js";
import bcrypt from 'bcrypt';
import Jwt  from "jsonwebtoken";
const saltosBcrypt= process.env.SALTOS;
const JwtToken = process.env.JWT;
export const PostofUsuario = async (Usuario) => {

    const {correo,contrasena} = Usuario;
    console.log(Usuario);
    try {
      const festivalidator = validarUsuario(Usuario);

      if(festivalidator.success) {

        const password = bcrypt.hashSync(contrasena, parseInt(saltosBcrypt));
        console.log('Contraseña cifrada:', password);
        const result = await PostUsuario(correo,password);
        return result[0];

      }else{
       
        throw new Error (festivalidator.error.message)
      }
       
     
    } catch (err) {
      throw new Error(err.message);
    }
  };
  
  export const loginUsuario =  (correo, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const emailEncontrado = await getbyCorreoUsuario(correo);
  
        if (emailEncontrado[0].length === 0) {
          return reject({
            message: 'correo o password incorrecto'
          });
        }
  
        const passwordCorrecto = bcrypt.compareSync(password, emailEncontrado[0].contrasena);
  
        if (!passwordCorrecto) {
          return reject(new Error('correo o password incorrecto'));
        }
        
        const payload = {
          correo: {
            id: emailEncontrado[0].idUsuario
          }
        };
  
        const token = Jwt.sign(payload, JwtToken, { expiresIn: '2h' });
        return resolve({
          message: 'Accesso Permitido',
          token
        });
      } catch (error) {
        return reject(error);
      }
    });
  };
  