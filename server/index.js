const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept, Bearer");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    // intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        // respond with 200
        console.log("Allowing OPTIONS");
        res.sendStatus(200);
    } else {
        // move on
        next();
    }
});

app.get('/one', (req, res) => {
    res.send('this is coming from ONE');
})
app.get('/two', (req, res) => {
    res.send('this is coming from TWO');
})
app.get('/three', (req, res) => {
    res.send('this is coming from THREE');
})
app.get('/four', (req, res) => {
    res.send('this is coming from FOUR');
})
app.get('/five', (req, res) => {
    res.send('this is coming from FIVE');
})
app.get('/six', (req, res) => {
    res.send('this is coming from SIX');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))