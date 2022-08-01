const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const html = fs.readFileSync('index.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});

app.get('/test', (req, res) => {
    res.send('test run');
});

app.listen(port, () => {
    console.log(`server running at http://127.0.0.1:${port}`);
});
