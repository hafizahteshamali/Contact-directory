import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ContactRoutes } from "./Routes/ContactRoutes.js";
import mongoose from "mongoose";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

app.get('/', (req, res)=>{
    res.send("Welcome to Backend Server...");
})

app.use('/contacts', ContactRoutes);

const dbConnecting = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Db Connected Successfully");
    } catch (error) {
        console.log("db not connected", error);
    }   
}

dbConnecting();

app.listen(PORT, ()=>{
    console.log("Backend Chal Para");
})
