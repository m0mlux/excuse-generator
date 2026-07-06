const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const port = 3000;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log("Serveur démarré sur le port " + port);
});



app.get('/excuses', (req, res) => {
    const excuses = db.prepare('SELECT * FROM excuses').all();
    res.json(excuses);
});


app.get('/excuses/random', (req, res) => {
    const excuse = db.prepare(
        'SELECT * FROM excuses ORDER BY RANDOM() LIMIT 1'
    ).get();

    res.json(excuse);
});

app.get('/excuses/:http_code', (req, res) => {
    const excuse = db.prepare(
        'SELECT * FROM excuses WHERE http_code = ?'
    ).get(req.params.http_code);

    res.json(excuse);
});

app.post('/excuses', (req, res) => {
    const { http_code, tag, message } = req.body;

    try {
        db.prepare(
            'INSERT INTO excuses (http_code, tag, message) VALUES (?, ?, ?)'
        ).run(http_code, tag, message);

        res.status(201).json({
            message: "Excuse ajoutée"
        });
    } catch (error) {
        res.status(400).json({
            message: "Ce code HTTP existe déjà"
        });
    }
});