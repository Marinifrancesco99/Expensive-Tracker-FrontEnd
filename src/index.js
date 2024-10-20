import express from "express";

const app = express();
app.use(express.static('./public'));
app.use('/public/images', express.static('./public/images'));


app.set('view engine', 'ejs');


// '/' indica il percorso di base (solitamente la homepage)
app.get('/', (req, res) => {
    // il metodo render parte già dalla cartella 'views' quindi specifichiamo il file partendo dal suo interno. Inoltre non serve specificare l'estensione '.ejs'
    res.render('pages/home');
})


app.get('/transazioni', (req, res) => {
    
    res.render("pages/transazioni");
})


app.listen(3000);
