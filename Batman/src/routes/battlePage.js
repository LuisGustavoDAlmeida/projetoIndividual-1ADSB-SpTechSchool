var express = require("express");
var router = express.Router();

var battlePageController = require("../controllers/battlePageController");

router.put("/updateArsenal/:fkLogin/:idEquipamento", function (req, res) {
    battlePageController.updateArsenal(req, res);
});

router.post("/resultsInsert/:idEquipamento/:idServer", function (req, res) {
    battlePageController.resultsInsert(req, res);
});


router.get("/leaderboard", function (req, res) {
    battlePageController.leaderboard(req, res);
});


module.exports = router;