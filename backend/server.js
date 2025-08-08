import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/db.js';

const app = express();
await connectDB()
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req,res)=>{res.send('Api is working')})

const PORT = process.env.PORT ||3000;

app.listen(PORT,()=>{
    console.log("Server is runnning on port " + PORT);
})

export default app
