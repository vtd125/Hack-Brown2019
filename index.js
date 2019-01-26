const express = require('express')
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000

const symptoms = ["anxiety", "depression", "happiness"];

app.get('/', (req, res) => {
    // route handler or callback function
    res.send(symptoms)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))