const router = require("express").Router();
const usuario = require("../controller/usuario.controller")

//Rotas
router.get("/find/:id", usuario.findUsuario);
router.get("/findAll", usuario.findAllUsuarios);
router.post("/create", usuario.createUsuario);
router.put("/update/:id", usuario.updateUsuario);
router.delete("/delete/:id", usuario.deleteUsuario);

module.exports = router;