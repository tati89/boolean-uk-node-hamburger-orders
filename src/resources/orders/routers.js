const express = require("express")
const hamburgersRouter = require("../hamburgers/routers")
const ordersRouter = express.Router()

let orders = []



ordersRouter.get("/", (req, res) => {
    res.json({orders: orders})
})

ordersRouter.post("/", (req, res) => {
    const newOrder = req.body
    orders = [...orders, {...newOrder, created_at: Date.now()}]
    res.json(newOrder)
})

ordersRouter.delete("/:id", (req, res) => {
    const foundId = parseInt(req.params.id)
    const foundOrder = orders.find(order => order.order_id === foundId)

    if (foundOrder) {
        let orders = orders.filter(order => order.order_id !== foundId)
        res.json({deleted: foundOrder})
    } else {
        res.json({msg: "Can't find matching Id"})
    }
})

module.exports = ordersRouter