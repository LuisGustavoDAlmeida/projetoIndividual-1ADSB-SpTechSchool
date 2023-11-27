var database = require("../database/config")

function deleteArsenal(idEquipamento) {
    var instrucao = `
    delete from loadout where idEquipamento = ${idEquipamento}`
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
    select points from analytics order by points desc;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    deleteArsenal,
    resultsInsert,
    leaderboard,
}