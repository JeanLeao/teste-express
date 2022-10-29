const express = require('express');
const app = express();


//USANDO O EJS COMO VIEW ENGINE PARA O EXPRESS
app.set('view engine', 'ejs');
//UTILIZAR ARQUIVOS ESTATICOS  'JS' 'CSS'
app.use(express.static('public'));

app.get('/', (req,res) => {
    // req.params pega na var também da rota
    var jean = 'JEAN'
    var exibir = true
    var produtos = [
        {nome: 'Batata', preco: 3.00},
        {nome: 'Coca-Cola', preco: 7.00},
        {nome: 'Gilete', preco: 1.50}
    ]

    res.render('index.ejs',{
        nome: jean,
        empresa: 'Teste',
        msg: exibir,
        prod: produtos
    });
})

app.listen(8080, () =>{console.log('Funcionando.');})