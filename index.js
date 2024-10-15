const  express = require('express');

const app= express();

app.get('/', (req,res)=>{
    res.send({hello:'there'});
})
app.get('/name', (req,res)=>{
    res.send({hello:'aloukik'});
})

const PORT=  5000;
app.listen(PORT);