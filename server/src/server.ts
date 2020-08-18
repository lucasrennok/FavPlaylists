import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("aaaaa")
});


app.listen(3333);