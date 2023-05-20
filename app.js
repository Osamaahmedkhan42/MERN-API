const express = require('express')
const globalErrorHandler = require('./controllers/errorController')
const app = express()
const userRouter = require('./routes/userRoutes')

app.use(express.json())

app.use('/api/v1/users', userRouter);


app.use(globalErrorHandler)
module.exports = app

