function getIndexView(req, res){
    res.render('index.html');
}

function postAgendarConsulta(req, res) {
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);
    let form_invalido = campos_invalidos.length > 0;

    res.render('index.html', { campos_invalidos, form_invalido, dados_consulta });
}


module.exports = {
    getIndexView,
    postAgendarConsulta
}

function validarRequisicaoAgendamentoConsulta(dados_consulta) {
    const campos_invalidos = [];

    if (!dados_consulta.nome || dados_consulta.nome.trim() === "")
        campos_invalidos.push("Nome");

    if (!dados_consulta.sobrenome || dados_consulta.sobrenome.trim() === "")
        campos_invalidos.push("Sobrenome");

    if (!dados_consulta.cpf || dados_consulta.cpf.trim() === "")
        campos_invalidos.push("CPF");

    if (!dados_consulta.data_nascimento || dados_consulta.data_nascimento.trim() === "")
        campos_invalidos.push("Data de nascimento");

    if (!dados_consulta.telefone || dados_consulta.telefone.trim() === "")
        campos_invalidos.push("Telefone");

    if (!dados_consulta.cep || dados_consulta.cep.trim() === "")
        campos_invalidos.push("CEP");

    if (!dados_consulta.endereco || dados_consulta.endereco.trim() === "")
        campos_invalidos.push("Endereço");

    if (!dados_consulta.clinica || dados_consulta.clinica.trim() === "")
        campos_invalidos.push("Clínica");

    if (!dados_consulta.especialidade || dados_consulta.especialidade.trim() === "")
        campos_invalidos.push("Especialidade");

    if (!dados_consulta.data_consulta || dados_consulta.data_consulta.trim() === "")
        campos_invalidos.push("Data da consulta");

    if (!dados_consulta.hora_consulta || dados_consulta.hora_consulta.trim() === "")
        campos_invalidos.push("Hora da consulta");

    
    const hoje = new Date();
    const dataConsulta = new Date(dados_consulta.data_consulta);
    if (dados_consulta.data_consulta && dataConsulta <= hoje)
        campos_invalidos.push("Data da consulta (deve ser no futuro)");

    return campos_invalidos;
}