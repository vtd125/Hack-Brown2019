const express = require('express')
const app = express();
const Joi = require('joi')
var bodyParser = require('body-parser')

app.use(express.json());
const port = process.env.PORT || 3000

const symptoms = [
    {id: 1, name: 'anxiety'},
    {id: 2, name: 'depression'},
    {id: 3, name: 'happiness'},
];

// 1. change the chat room we are sent to via post request body
// 2. edit the user name
// 3. 

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
    // openChat("hello")
    // res.send("Sent a message.");
})

app.post('/api/chat', (req, res) => {
    console.log(req)
    const name = req.body.name;
    // openChat(message_content);
    var group_name = name + "_chat.html"
    // res.send(group_name);
    res.sendFile(group_name, {root: __dirname })
})

function openChat(message){

    
}


// app.post('/api/home', (req, res) => {
//     const { error } = validateInput(req.body);

//     if (error) return res.status(400).send(error.details[0].message);

//     const symptom = {
//         id: symptoms.length + 1,
//         name: req.body.name
//     };
    
//     courses.push(course);
//     res.send(course);
// })

// function validateInput(input){
//     const schema = {
//         name: Joi.string().min(3).required()
//     }
//     return Joi.validate(input, schema);
// }

app.listen(port, () => console.log(`App listening on port ${port}!`));