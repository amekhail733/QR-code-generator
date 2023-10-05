const express = require('express');
const inquirer = require('inquirer');
const qr = require('qr-image');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { qrCode: null });
});

app.post('/generate', (req, res) => {
    const url = req.body.url;
    const qr_svg = qr.imageSync(url, { type: 'png' });
    
    fs.writeFileSync('public/qr-code.png', qr_svg);
    res.render('index', { qrCode: 'public/qr-code.png' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
