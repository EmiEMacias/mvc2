import mongoose from "mongoose";
import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import { testCont } from "./backend/controllers/user.controller";
mongoose.connect(process.env.url_bd)
.then(()=>{
    console.log("conectado")
})
.catch((err)=>{
    console.log("no conectado")
})
 testCont()