var database = require("../database/config")

function confirmItens(equip1, equip2, equip3, dataBaseHp, dataBaseDamage, dataBaseDefense, dataBaseEvasion, id) {

    var instrucao = `
    INSERT INTO loadout (equip1, equip2, equip3, dataBaseHp, dataBaseDamage, dataBaseDefense, dataBaseEvasion, fkLogin) VALUES ('${equip1}' , '${equip2}' , '${equip3}' , '${dataBaseHp}' , '${dataBaseDamage}', '${dataBaseDefense}', '${dataBaseEvasion}', ${id}); 
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getItens (idEquipamento) {
    // console.log ("Valor da fkLogin", fkLogin)
    var instrucao = `
    select * from loadout where idEquipamento = ${idEquipamento};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    confirmItens,
    getItens
}