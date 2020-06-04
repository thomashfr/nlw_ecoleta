import express, { response } from 'express';

const app = express();

app.get('/users',(request, response) =>{

  response.json(['Diego' ]);

});

app.listen(3333);

