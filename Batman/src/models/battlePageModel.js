var database = require("../database/config")

function updateArsenal(fkLogin, idEquipamento) {
    var instrucao = `update loadout set equip1 = null, equip2 = null, equip3 = null, dataBaseHp = null, dataBaseDamage = null, dataBaseDefense = null, dataBaseEvasion = null where idEquipamento = ${idEquipamento};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function resultsInsert(points, actualBatman, sendDamage, sendHealth, actualVillain, idEquipamento, fkLogin) {
    var instrucao = `
    insert into analytics (points, actualBatman, sendDamage, sendHealth, actualVillain, fkEquipamento, fkLoginEquipamento) VALUES (${points}, '${actualBatman}', ${sendDamage}, ${sendHealth}, '${actualVillain}', ${idEquipamento}, ${fkLogin})`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function leaderboard() {
    var instrucao = `
    select usuario.username, points, actualBatman, sendDamage, sendHealth, actualVillain, fkEquipamento from analytics
join usuario on fkLoginEquipamento = idUsuario order by points desc;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    updateArsenal,
    resultsInsert,
    leaderboard,
}