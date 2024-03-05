import { Router } from "express";
import { getFestividades, getbyIdFestividades, PostFestividades,putFestividadesControlller, deleteFestividadesControlller } from "../controllers/festividad.controller.js";
import { verificarJWT } from "../middleware/auth.middleware.js";
import rateLimit from "express-rate-limit";

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 6, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });
const festividadRoute = Router();

festividadRoute.get('/',accountLimiter, getFestividades)
festividadRoute.get('/:id',accountLimiter, getbyIdFestividades)
festividadRoute.post('/',accountLimiter, verificarJWT, PostFestividades)
festividadRoute.put('/:id',accountLimiter,verificarJWT, putFestividadesControlller )
festividadRoute.delete('/:id',accountLimiter,verificarJWT, deleteFestividadesControlller)
export default festividadRoute;
              