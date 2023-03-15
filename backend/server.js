import {app} from './app.js';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import cloudinary from 'cloudinary';



// Config
dotenv.config({path:'./backend/config/config.env'});

// Connect Database
connectDatabase();

// Cloudinary
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

// Creating a Server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});