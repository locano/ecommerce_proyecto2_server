const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Creacion de rutas
app.use(require('./routes/index.routes'));

app.listen(5000);
console.log('Server on port 5000');