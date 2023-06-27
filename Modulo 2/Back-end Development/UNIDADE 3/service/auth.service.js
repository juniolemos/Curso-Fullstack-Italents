const Usuario = require("../model/usuario");
const jwt = require("jsonwebtoken");


const loginService = (email) => Usuario.findOne({ email});

const generateToken = (userId, segredo) => jwt.sign(userId, segredo,);

module.exports = {loginService, generateToken};