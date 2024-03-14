import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import userRouter from './routes/UserRoutes.js'
import candidateRouter from './routes/CandidateRoutes.js'

const app = express();
dotenv.config()

const port = process.env.PORT || 5000
connectDB();

//Middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//Routes
app.use('/users',userRouter)
app.use('/candidate',candidateRouter)

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})

