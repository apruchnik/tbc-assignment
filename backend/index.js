const express = require('express')
const app = express()
const cors = require('cors');
const {car} = require("./car");
const port = 3001

app.use(cors({allowedHeaders: ['Content-Type']}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    const results = car();
    res.send(results);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
