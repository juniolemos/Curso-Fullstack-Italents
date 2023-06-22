const router = require("express").Router();
const user = require("../controller/user.controller")

//Rotas
router.get("/find/:id", user.finduser);
router.get("/findAll", user.findAllusers);
router.post("/create", user.createuser);
router.put("/update/:id", user.updateuser);
router.delete("/delete/:id", user.deleteuser);

module.exports = router;