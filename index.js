const { json } = require('express');
const express = require('express'); //IMPORT NO EXPRESS
const app = express(); // INICIANDO ELE EM UMA CONSTANTE 


app.get('/',(req,res) =>{ // pegando parâmetro REQUISIÇÃO E RESPOSTA E PASSANDO NA ROTA '/' PRINCIPAL
    res.send('Olá mundo')
});

app.get('/ola/:nome', (req,res) => { //ENVIAR DADOS DO USUARIO ATRÁVES DO :PARAMETRO
    var nome = req.params.nome
    res.send(nome)
});

app.get('/ola/:nome?', (req,res) => { //ENVIAR DADOS DO USUARIO ATRÁVES DO :PARAMETRO NÃO OBRIGATORIO

    var nome = req.params.nome
    if (nome){
        res.send(nome)
    }else{
        res.send('No Param')
    }
});

app.get('/canal', (req,res) => { //ENVIAR DADOS DO USUARIO PARA O SERVIDOR DIRETAMENTE POR QUERRY

    var yt = req.query['canal'];
    if (yt){
        console.log(yt)
    }else{
        res.send('Não foi passado')
    }

});

app.listen(4321,(err) => {
    if (!err){ 
        console.log('Servidor iniciado');
    }
})
