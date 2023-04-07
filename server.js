const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>99 bottles of beer on the wall!</h1>
        <h1>99 bottles of beer!</h1>
        <h1><a href='/98'>take one down, pass it around...</a></h1>
    `)
})

app.get('/:number_of_bottles', (req, res) => {
    const { number_of_bottles } = req.params;
    if (number_of_bottles > 100) {
        res.send(`
        <h1>Too many bottles of beer on the wall!</h1>
        <h1><a href='/'>start over</a></h1>
        `)
    } else if (number_of_bottles === '1') {
        res.send(`
        <h1>${number_of_bottles} bottle of beer on the wall!</h1>
        <h1>${number_of_bottles} bottle of beer on the wall! ${number_of_bottles} bottle of beer!</h1>
        <h1><a href='/${number_of_bottles - 1}'>Take one down, pass it around...</a></h1>
        `)
    } else if (number_of_bottles <= '0') {
        res.send(`
        <h1>No more bottles of beer on the wall!</h1>
        <h1><a href='/'>start over</a></h1>
        `)
    }
    res.send(`
    <h1>${number_of_bottles} bottles of beer on the wall!</h1>
    <h1>${number_of_bottles} bottles of beer on the wall! ${number_of_bottles} bottles of beer!</h1>
    <h1><a href='/${number_of_bottles - 1}'>Take one down, pass it around...</a></h1>
    `)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})
