const fs = require('fs');














//TESTES//TESTES//TESTES//TESTES//TESTES//TESTES//TESTES//TESTES//TESTES//TESTES


/* LENDO E ESCREVENDO

fs.readFile('./user.json',{encoding: 'utf-8'}, (err, data) => {
    if(err) {
        console.log('Falha na leitura do arquivo.')
    }else{
     var conteudo = JSON.parse(data);
     conteudo.nome = "Jean Leao Gato"
    console.log(conteudo)
    
    fs.writeFile('./user.json', JSON.stringify(conteudo), (err) => {
        if (err) {
            console.log(err)
        }
    })

        
    }
});
*/


// WRITE FS
/*
fs.writeFile('./jean.leao', "Teste", (err)=> {
    if (err) {
        console.log(err)
    }
}); */



// LEITURA FS
/*
fs.readFile('./jean.leao',{encoding: 'utf-8'}, (err, data) => {
    if(err) {
        console.log('Falha na leitura do arquivo.')
    }else{
        console.log(data)
    }
});*/
