const express = require('express')
const app = express();
const Joi = require('joi')
var bodyParser = require('body-parser')
const info = require("./helper");


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000

const symptoms = [
    {id: 1, name: 'anxiety'},
    {id: 2, name: 'depression'},
    {id: 3, name: 'happiness'},
];

// 1. edit the user name
// 2. 

app.get('/', (req, res) => {
    // route handler or callback function
    // res.send("Welcome to a inclusive chat with people similar to you.")
    res.sendFile('index.html', {root: __dirname })
});

app.get('/api/home', (req, res) => {
    res.send(symptoms)
})

app.get('/api/chat', (req, res) => {
    res.sendFile('anxiety_chat.html', {root: __dirname })
})

app.post('/api/chat', (req, res) => {
    const name = req.body.name;
    var group_name = name + "_chat.html"
    // var group_name = info.group_name + "_chat.html"
    res.sendFile(group_name, {root: __dirname })
})


app.listen(port, () => console.log(`App listening on port ${port}!`));