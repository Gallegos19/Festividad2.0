import { Router } from "express";
import festividadRoute from "./festividad.route.js";
import auth from "./auth.route.js";
const indexRoute = Router();
const prefijox = "Apix";

indexRoute.use(`/${prefijox}/festividad`,festividadRoute)
indexRoute.use(`/${prefijox}/usuario`,auth)
export default indexRoute;