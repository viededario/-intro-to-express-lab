const express = require('express');

const app = express();

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/greetings/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}!`);
  });
  

  


  app.get('/roll/:number', (req, res) => {
    const number = req.params.number
    if (isNaN(number)) {
        res.send ('You must specify a number.')
    }
    else {
        const randomNumber = Math.floor(Math.random() * number + 1);
        res.send(`You rolled a ${randomNumber}`)

    }
  });
  

  

app.get('/collectibles/:idx', (req, res) => {
    const idx = req.params.idx 
    if ( isNaN(idx) || idx > collectibles.length || idx <= - 1){
        res.send('This item is not yet in stock. Check back soon!')
    }
else {
const item = collectibles[idx]
    res.send(`So, you want the ${item.name} For ${item.price} , it can be yours!`)
}
});





app.get('/shoes', (req, res) => {
    let shoesFiltered  = shoes
    const { minPrice, maxPrice, type } = req.query
    
if (minPrice) { 
 shoesFiltered = shoesFiltered.filter((shoe) => {
    return shoe.price >= minPrice
 })
}
if (maxPrice) {
    shoesFiltered = shoesFiltered.filter((shoe) => {
       return  shoe.price >= maxPrice

    })
}
if (type) {
    shoesFiltered = shoesFiltered.filter((shoe) => {
        return shoe.type === type
    })
}
res.send(shoesFiltered)
})






  app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000')
  })

  