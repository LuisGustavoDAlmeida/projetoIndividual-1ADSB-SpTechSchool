var express = require ("express");
var router = express.Router();

var statsBattleController = require ("../controllers/statsBattleController");


router.post("/confirmItens", function (req, res) {
    statsBattleController.confirmItens (req, res);
});

router.get("/getItens/:idEquipamento", function (req, res) {
    statsBattleController.getItens (req, res);
});

module.exports = router;