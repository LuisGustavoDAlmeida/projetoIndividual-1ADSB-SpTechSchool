var express = require("express");
var router = express.Router();

var wayneManorController = require("../controllers/wayneManorController");

router.post("/cadastrar", function(req, res) {
    wayneManorController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res){
    wayneManorController.autenticar(req, res);
});


module.exports = router;