import express, { json } from 'express';
import { moviesRouter } from './routes/movies.js';
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})