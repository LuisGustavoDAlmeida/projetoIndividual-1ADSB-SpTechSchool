var battlePageModel = require("../models/battlePageModel");

// function deleteArsenal(req, res) {
//     var idEquipamento = req.body.idEquipamentoServer;

//     if (idEquipamento == undefined) {
//         res.status(400).send("Seu equipamento não tem id");
//     }

//     battlePageModel.deleteArsenal(idEquipamento)
//         .then(
//             function (resultado) {

//                 res.json(resultado);
//                 if (resultado.length == 1) {
//                     res.status(200).send("Equipamentos cadastrados com sucesso");
//                 }
//             }).catch(function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "\nHouve um erro ao realizar o cadastro! Erro: ",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             })
// }

function resultsInsert(req, res) {
    var points = req.body.pointsServer;
    var actualBatman = req.body.actualBatmanServer;
    var sendDamage = req.body.sendDamageServer;
    var sendHealth = req.body.sendHealthServer;
    var actualVillain = req.body.actualVillainServer;
    var idEquipamento = req.params.idEquipamento;
    var fkLogin = req.params.idServer;

    if (points == undefined) {
        res.status(400).send("Seus pontos são inválidos");
    }

    if (actualBatman == undefined) {
        res.status(400).send("Batman não selecionado");
    }

    if (sendDamage == undefined) {
        res.status(400).send("Dano inválido");
    }

    if (sendHealth == undefined) {
        res.status(400).send("Vida inválida");
    }

    if (actualVillain == undefined) {
        res.status(400).send("Vilão não selecionado");
    }

    if (idEquipamento == undefined) {
        res.status(400).send("ID não selecionado");
    }

    battlePageModel.resultsInsert(points, actualBatman, sendDamage, sendHealth, actualVillain, idEquipamento, fkLogin)
        .then(
            function (resultado) {

                res.json(resultado);
                if (resultado.length == 1) {
                    res.status(200).send("Analytics cadastrados com sucesso");
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

function leaderboard(req, res) {
    battlePageModel.leaderboard()
        .then((resultado) => {
            res.json(resultado);
            if (resultado.length == 1) {
                res.status(200).send("Leaderboards cadastrados com sucesso");
            }
        }).catch((erro) => {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    // deleteArsenal,
    resultsInsert,
    leaderboard,
}