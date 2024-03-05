import { Router } from "express";
import { createUser, login } from "../controllers/usuario.controller.js";
const usuarioRoute = Router();

usuarioRoute.post('/', createUser)
usuarioRoute.post('/auth', login)

export default usuarioRoute;
              