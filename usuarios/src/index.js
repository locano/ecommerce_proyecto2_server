const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Creacion de rutas
app.use(require('./routes/index.routes'));

app.listen(5000);
console.log('Server on port 5000');