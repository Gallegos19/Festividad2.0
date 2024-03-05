import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import indexRoute from './src/routes/index.route.js';
import database from './src/config/database.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/",indexRoute); 
dotenv.config();
app.set("PORT", process.env.PORT || 3003);
app.listen(app.get("PORT"),() => {console.log("listening on port "+app.get("PORT"));});
app.use("*", (req,res)=>{  res.status(404).send('No está mi mike');});
database.connect()
.then(()=>{console.log("database connected")})
.catch((error) => { console.log(error)})

