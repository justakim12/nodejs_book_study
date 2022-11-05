const express = require('express')
const customerRoute = require('./routes/customer');
const productRoute = require('./routes/product');
const app = express()
const port = 3000

app.use(express.json({
    limit: '50mb'
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port,  () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`)
})

app.use('/customer', customerRoute);
app.use('/product', productRoute);