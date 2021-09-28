const { application } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();

const fetch = require('node-fetch')

app.use(express.json());

app.use(require('./headers'));

// const PORT = process.env.PORT || 5001;

// app.listen(PORT, () => console.log(`This is live on port ${PORT}`));
app.listen(process.env.PORT, () =>
    console.log(`App is listening on the Port number ---> ${process.env.PORT}`)
);

app.get('https://lakers-backend.herokuapp.com/lastevents', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/eventslast.php?id=134867`

    const url_res = await fetch(url)

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('https://lakers-backend.herokuapp.com/upcomingevents', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/eventsnext.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('https://lakers-backend.herokuapp.com/showplayers', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookup_all_players.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('https://lakers-backend.herokuapp.com/showequipment', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookupequipment.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('https://lakers-backend.herokuapp.com/teamdetails', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookupteam.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('https://lakers-backend.herokuapp.com/', async (req, res) => {
    let signal = 'This server is active.'
    res.json([signal]);
})