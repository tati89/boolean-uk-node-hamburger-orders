//import express and morgan
const express = require("express")
const morgan = require("morgan")

//import routers
const hamburgersRouter = require("./resources/hamburgers/routers")
const ordersRouter = require("./resources/orders/routers")

const app = express()

// Middlewares
app.use(morgan("dev"))
app.use(express.json())

//Routers
app.use("/hamburgers", hamburgersRouter)
app.use("/orders", ordersRouter)



const port = 3000
app.listen(port, () => {
    console.log(`I'm running on ${port}`)
})