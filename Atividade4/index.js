const express = require('express');
const estoque  = require('./src/estoque');
const app = express()


app.get('/', (req,res)=>{

    res.send('Atv 4 - Estoque')
})

app.get('/adicionar/:id/:nome/:qtd', (req,res)=>{

    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p);
    res.send(p);   
})


app.get('/listar', (req, res)=> {
    res.send(estoque.listarProdutos());
})

app.get('/remover/:id', (req, res)=> {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);
});

app.get('/editar/:id/:qtd', (req, res) => {
    let id = req.params.id;
    let novaQtd = parseInt(req.params.qtd);

    let sucesso = estoque.editarQuantidade(id, novaQtd);

    if (sucesso) {
        res.send({ mensagem: 'Quantidade atualizada com sucesso!' });
    } else {
        res.status(404).send({ erro: 'Produto não encontrado!' });
    }
});



const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});