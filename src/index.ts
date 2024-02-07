import express, {Express,Request,Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

//tambien podemos usar const app = require('express')();

const app:Express = express(); //las dos cosas son lo mismo, solo que se expresan de manera diferente. 
const port = process.env.PORT || 3000; //definición de una variable de ambiete. 


app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rutas definidas
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.get('/about',(req: Request, res: Response) =>{
    res.send("name");
});
app.post('/about', (req: Request, res: Response) => {
    res.send('name' + req.body.name);
});




app.listen(port, () => {
    console.log("Server on port" + port);
    console.log(`Server on port ${port}` + ` de otra forma`); //esta es otra forma mostrar 
    //información en consola
});

