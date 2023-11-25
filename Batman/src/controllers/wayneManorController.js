var wayneManorModel = require("../models/wayneManorModel");

// function listar(req, res) {
//     carroModel.listar().then(function(resultado){
//         // precisamos informar que o resultado voltará para o front-end como uma resposta em json
//         res.status(200).json(resultado);
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

function cadastrar(req, res) {
    var username = req.body.usernameServer;
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (username == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }

    if (nome == undefined) {
        res.status(400).send("Seu Nome está undefined!");
    }

    if (sobrenome == undefined) {
        res.status(400).send("Seu Nome está undefined!");
    }

    if (email == undefined) {
        res.status(400).send("Seu Email está undefined!");
    }

    if (senha == undefined) {
        res.status(400).send("Sua Senha está undefined!");
    }

    wayneManorModel.cadastrar(username, nome, sobrenome, email, senha)
        .then(
            function (resultado) {
                
                res.json(resultado);
                if (resultado.length == 1){
            res.status(200).send("Cadastro criado com sucesso");
                } 
        }).catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }) 
} 

function autenticar(req, res) {
    // var id = req.body.idServer
    var username = req.body.usernameServer;
    var senha = req.body.senhaServer;

    if (username == undefined) {
        res.status(400).send("Seu username está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        wayneManorModel.autenticar(username, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        wayneManorModel.autenticar(resultadoAutenticar[0].username, resultadoAutenticar[0].senha, resultadoAutenticar[0].idUsuario, )
                            .then((resultadoAutenticar) => {
                                if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        // id: resultadoDetalhe[0].idUsuario,npm
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        username: resultadoAutenticar[0].username,
                                        // nome: resultadoDetalhe[0].nome,
                                        // sobrenome: resultadoDetalhe[0].sobrenome,
                                        // email: resultadoDetalhe[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                    });
                                }
                            })


                        // .then((resultadoAutenticar) => {
                        //     if (resultadoAutenticar.length > 0) {
                        //         res.json({
                        //             id: resultadoAutenticar[0].username,
                        //             senha: resultadoAutenticar[0].senha,
                        //             // email: resultadoAutenticar[0].email,
                        //             // nome: resultadoAutenticar[0].nome,
                        //             // aquarios: resultadoAquarios
                        //         });
                        // } else {
                        //     res.status(204).json({ username: [] });
                        // }
                        // })

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Username e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    cadastrar,
    autenticar
}