import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import userRouter from './routes/UserRoutes.js'
import candidateRouter from './routes/CandidateRoutes.js'


const app = express();
dotenv.config()

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.PORT || 8000
connectDB(username, password);

//Middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//Routes
app.use('/api/v1/users',userRouter)
app.use('/api/v1/candidate',candidateRouter)

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
})

