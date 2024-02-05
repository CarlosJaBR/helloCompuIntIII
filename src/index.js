import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

//tambien podemos usar const app = require('express')();

const app = express(); //las dos cosas son lo mismo, solo que se expresan de manera diferente. 
const port = process.env.PORT || 3000; //definición de una variable de ambiete. 


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log("Server on port" + port);
    console.log(`Server on port ${port}` + ` de otra forma`); //esta es otra forma mostrar 
    //información en consola
});

