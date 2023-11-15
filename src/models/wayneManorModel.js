var database = require("../database/config")

function cadastrar(username, nome, sobrenome, email, senha) {
    var instrucao = `
        INSERT INTO cadastro (username, nome, sobrenome, email, senha) VALUES ('${username}' , '${nome}' , '${sobrenome}' , '${email}' , '${senha}'); 
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function autenticar(username, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", username, senha)

    var instrucao = `
        SELECT idUsuario, username, nome, sobrenome, email, senha FROM cadastro WHERE username = '${username}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    autenticar
    // listar
};
