const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.header({
        'Content-Type' : 'text/html'
    });

    if (req.headers['custom-header'] == 'Pesho') {
        res.send('<h1>Hello from Pesho</h1>')
    } else {
        res.send('<h1>Hello from Custom Server</h1>')
    }
});

app.get('/cats', (req, res) => {
    res.json([        
        {
            "Name" : "Navcho",
            "Age" : 8
        },
        {
            "Name" : "Pisana",
            "Age" : 4
        }
        ])
})

app.get('/dogs', (req, res) => {
    res.json([
        {
            "Name" : "Sharo",
            "Age" : 7
        },
        {
            "Name" : "Ben",
            "Age" : 3
        }
    ])
})

app.listen(3000);