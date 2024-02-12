import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { constants } from 'buffer';

dotenv.config();

const connectiionString = process.env.MONGO_URL || "mongodb://localhost:27017/myDB";

export const db = mongoose.connect(connectiionString).then(() =>
    console.log("Conectado a la base de datos")).catch((error) => console.log(error)); //esto es una promesa.