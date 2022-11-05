const express = require('express');
require('dotenv').config({path: 'nodemailer/.env'});

const nodemailer = require('./nodemailer');
const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log('Server started. port 3000.');
})

app.post('/email', async (req, res) => {
    const r = await nodemailer.send(req.body.param);
    res.send(r)
});
