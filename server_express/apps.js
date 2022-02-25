//const express = require('express');

const express    = require('express');
const path= require('path');
//instancia de express
const   app= express();
//app.listen(3000,()=>console.log('servidor en el puerto 3000'));



//con estas tres lineas de codigo ya tenemos un servidor express funcionando

//settings
//configuraciones
//configuramos el puerto
app.set('port', process.env.PORT || 4000);
//configuramos las vistas
app.set('views',path.join(__dirname,'views'));
//motor de plantillas ejs
app.set('view engine','ejs');

//middlewares
//creamos una funcion flecha
app.use((req,res,next)=>{
    console.log(`${req.url}-${req.method}`);
    next;//que pueda continuar
}

);

//routes

//static files

//start the server
app.listen(app.get('port'),()=>{
    console.log('servidor en el puerto',app.get('port'))
});