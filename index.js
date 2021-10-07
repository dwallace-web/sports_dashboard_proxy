const express = require('express');
const app = express();
require('dotenv').config();

const fetch = require('node-fetch')

app.use(express.json());

app.use(require('./headers'));

app.listen(process.env.PORT, () =>
    console.log(`App is listening on the Port number ---> ${process.env.PORT}`)
);

app.get('/lastevents', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/eventslast.php?id=134867`

    const url_res = await fetch(url)

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('/upcomingevents', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/eventsnext.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('/showplayers', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookup_all_players.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('/showequipment', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookupequipment.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('/teamdetails', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookupteam.php?id=134867`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('/leaguedetails', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookup_all_teams.php?id=4387`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

app.get('/leaguenextevents', async (req, res) => {
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/eventsnextleague.php?id=4387`

    const url_res = await fetch(url);

    const url_res_data = await url_res.json();

    res.json(url_res_data);
})

// players by team id
app.get('/lookupplayers/:teamid', async (req, res) => {
    let teamid = req.params.teamid;
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookup_all_players.php?id=${teamid}`
    const url_res = await fetch(url);
    const url_res_data = await url_res.json();
    res.json(url_res_data);
})


// equipment by team id
app.get('/lookupequipment/:teamid', async (req, res) => {
    let teamid = req.params.teamid;
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/lookupequipment.php?id=${teamid}`
    const url_res = await fetch(url);
    const url_res_data = await url_res.json();
    res.json(url_res_data);
})

// equipment by team id
app.get('/eventsnext/:teamid', async (req, res) => {

    let teamid = req.params.teamid;
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/eventsnext.php?id=${teamid}`
    const url_res = await fetch(url);
    const url_res_data = await url_res.json();
    res.json(url_res_data);
})

// Last 5 Events  by team id
app.get('/eventslast/:teamid', async (req, res) => {

    let teamid = req.params.teamid;
    const url = `https://www.thesportsdb.com/api/v1/json/${process.env.KEY}/eventslast.php?id=${teamid}`
    const url_res = await fetch(url);
    const url_res_data = await url_res.json();
    res.json(url_res_data);
})

app.get('/', async (req, res) => {
    let signal = 'This server is active.'
    res.json([signal]);
})