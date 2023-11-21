//defino el server
const express = require("express")
const app = express();
const path = require("path");
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "public")));

//configurando ejs para las vistas 1°
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/src/views"));
//

//configurando layout 2°. la ruta especidifcada la toma a aprtir de la ruta view.
//si no configuro ninguna ruta asume que esta suelto dentro de views
app.use(expressLayouts);
app.set('layout', 'layouts/layout');
//

//este middleware permite acceder a los datos enviados
//en un post a travez del objeto req.body. 
app.use(express.urlencoded({ extended:false}));
app.use(methodOverride("_method"));

app.use(require('./src/routers/tareasRouter'));

const PORT=3000;

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`));



