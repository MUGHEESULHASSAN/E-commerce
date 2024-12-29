import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCLoudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";



//App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCLoudinary();


//middlewares
app.use(express.json());    
// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     methods:["GET","POST","PUT","DELETE"],
//     credentials:true
// }));
app.use(cors());    

//api endpoints

app.use('/api/user',userRouter);
app.use("/api/product",productRouter);


app.get("/",(req,res)=>{
    res.send("Api Working");

})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})  