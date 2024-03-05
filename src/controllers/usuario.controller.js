import { PostofUsuario, loginUsuario } from '../services/usuario.service.js';

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        await PostofUsuario(data);
        return res.status(201).json({
            message: 'Usuario creado exitosamente'
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);

        return res.status(500).json({
            message: 'Ocurrió un error al crear usuario',
            error: error.message,
        });
    }
};

export const login = async (req, res) =>{
    try {
        const {correo, contrasena} = req.body;
        const resp = await loginUsuario(correo, contrasena);
        console.log('hola', resp);

        if (resp) {
            // Aquí puedes hacer algo con la respuesta
            res.status(200).json({
                message: 'Acceso permitido',
                token: resp.token // Supongamos que la respuesta tiene un token
            });
        } else {
            res.status(401).json({
                message: 'Credenciales inválidas'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:'Error al validar credenciales',
            error: error.message
        });
    }
};
