const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/currency', (req, res) => {
    let data = [
        {
            currency: 'dollar', 
            price: 1.11
        }, 
        {
            currency: 'Yen', 
            price: 122
        },
        {
            currency: 'Pounds',
            price: 0.85
        },
        {
            currency: 'Zloty',
            price: 4.25
        },
        {
            currency: 'Real',
            price: 4.51
        }
    ]
    res.send(data);

});

app.listen(2000, () => {
    console.log('Port 2000 running');
});
