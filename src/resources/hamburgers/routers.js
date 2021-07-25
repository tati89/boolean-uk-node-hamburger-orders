//import express router
const express = require("express")
const hamburgersRouter = express.Router()

let hamburgers = [
    {
  "id": 8,
  "name": "Vegetarian Burger",
  "quantity": 8,
  "restaurant": "Indian Burgers",
  "web": "https://www.cookwithmanali.com/vegetarian-burger-indian-style/",
  "description": "With summer around the corner, I had to share a vegetarian burger recipe with you guys. Actually I plan to share more in the next month but I thought I will start with this Indian style Vegetarian Burger aka Masala Burger!",
  "ingredients": [
    "american cheese",
    "burger sauce",
    "french mustard",
    "pickes",
    "onion",
    "Veggies"
  ]
},
{
  "id": 9,
  "name": "Fat Santa",
  "quantity": 3,
  "restaurant": "Sky City Hamilton",
  "web": "https://skycityhamilton.co.nz/eat-drink/eat-burger/",
  "description": "A Christmas themed burger",
  "ingredients": [
    "chicken thigh",
    "champagne ham",
    "sage and onion stuffing",
    "gravy mash",
    "lettuce",
    "tomato",
    "cranberry sauce"
  ]
},
{
  "id": 10,
  "name": "Blondie",
  "quantity": 5,
  "restaurant": "Yankys",
  "web": "http://yankyslambton.co.za/menu/",
  "description": "Delicious steak burger",
  "ingredients": [
    "steak",
    "BBQ sauce",
    "bacon",
    "egg",
    "cheese",
    "lettuce",
    "tomato",
    "onion",
    "gerkins"
  ]
},
{
  "id": 11,
  "name": "Monster Burger",
  "quantity": 5,
  "restaurant": "Yankys",
  "web": "http://yankyslambton.co.za/menu/",
  "description": "Massive meaty burger - the size of a dinner plate",
  "ingredients": [
    "250g patty",
    "bacon",
    "cheese",
    "2 eggs",
    "steak",
    "BBQ sauce",
    "lettuce",
    "tomato",
    "onion",
    "gerkins"
  ]
}
]

//A GET endpoint /hamburgers
hamburgersRouter.get('/', (req, res) => {
    res.json({hamburgers: hamburgers})
})

//A POST endpoint /hamburgers to add a new hamburger to the menu.
hamburgersRouter.post('/', (req, res) => {
    const newHamburger = req.body
    hamburgers = [...hamburgers, newHamburger]
    res.json({hamburgers: newHamburger})
})

//A PATCH endpoint to UPDATE info about your hamburgers
hamburgersRouter.patch('/:id', (req, res) => {
    const foundID = Number(req.params.id)
    const index = hamburgers.findIndex(item => item.id === foundID)

    if (index) {
        const updatedData = req.body
        hamburgers[index] = {...hamburgers[index],...updatedData}
        res.json({updatedHamburger: hamburgers[index]})
    } else {
        res.json({msg: "The ID doesn'exict"})
    }
    
})






module.exports = hamburgersRouter