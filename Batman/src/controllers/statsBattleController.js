var statsBattleModel = require("../models/statsBattleModel");

function confirmItens(req, res) {
    var id = req.body.idServer;
    var equip1 = req.body.equip1Server;
    var equip2 = req.body.equip2Server;
    var equip3 = req.body.equip3Server;
    var dataBaseHp = req.body.hpServer;
    var dataBaseDamage = req.body.damageServer;
    var dataBaseDefense = req.body.defenseServer;
    var dataBaseEvasion = req.body.evasionServer;

    if (equip1 == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }
    if (equip2 == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }
    if (equip3 == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }
    if (dataBaseHp == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }
    if (dataBaseDamage == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }
    if (dataBaseDefense == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }
    if (dataBaseEvasion == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }
    if (id == undefined) {
        res.status(400).send("Seu Username está undefined!");
    }

    statsBattleModel.confirmItens(id, equip1, equip2, equip3, dataBaseHp, dataBaseDamage, dataBaseDefense, dataBaseEvasion, d)
        .then(
            function (resultado) {

                res.json(resultado);
                if (resultado.length == 1) {
                    res.status(200).send("Equipamentos cadastrados com sucesso");
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

function getItens(req, res) {
    var id = req.params.idServer;
    
    statsBattleModel.getItens(id)
    .then((resultado) => {
        res.status(200).json(resultado);
        // res.status(200).send ("Equipamentos foram lidos com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    confirmItens,
    getItens
}
