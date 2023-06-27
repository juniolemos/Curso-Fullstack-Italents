const router = require("express").Router();
const usuario = require("../controller/usuario.controller")

//Rotas
router.get("/find/:id", usuario.findUsuario);
router.get("/findAll", usuario.findAllUsuarios);
router.post("/create", usuario.createUsuarios);
router.put("/update/:id", usuario.updateUsuarios);
router.delete("/delete/:id", usuario.deleteUsuario)

module.exports = router;