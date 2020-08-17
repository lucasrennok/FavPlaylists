import express from 'express';

const app = express();

app.get('/users', () => {
    console.log("Teste");
});

app.listen(3333)