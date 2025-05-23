let produtos = [];

function criarProduto(id, nome, qtd){

    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);

}


function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}

function editarQuantidade(id, novaQtd) {
    let produto = produtos.find((p) => p.id == id);
    if (produto) {
        produto.qtd = novaQtd;
        return true;
    }
    return false;
}



module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarQuantidade
};