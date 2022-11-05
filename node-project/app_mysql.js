const express = require('express')
const mysql = require('./mysql');

const app = express()
const port = 3000

app.use(express.json({
    limit: '50mb'
}))


app.listen(port, () => {
    console.log(`Server started. http://localhost:${port}`)
})

app.get("/customers", async (req, res) => {
    const customers = await mysql.query('customerList');
    console.log(customers);
    res.send(customers);
});

app.post("/customers/insert", async (req, res) => {
    console.log(req.body);
    const result = await mysql.query('customerInsert', req.body.param);
    res.send(result);
});