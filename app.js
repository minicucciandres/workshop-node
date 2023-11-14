//defino el server
const express = require("express")
const app = express();

app.use(express.static("public"));

//configurando ejs para las vistas
app.set("view engine","ejs");
app.set('views', 'src/views');
//




app.use(require('./src/routers/tareasRouter'))

const PORT=3000;

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`));



