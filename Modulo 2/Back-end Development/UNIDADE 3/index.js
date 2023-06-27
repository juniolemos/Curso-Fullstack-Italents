//configuracoes basicas
const express = require("express");
const connectToDatabase = require("./database/database");
const usuario = require("./router/usuario.router");
const authService =require("./service/auth.service");
const jwt = require("jsonwebtoken");

const app = express();

connectToDatabase();

const port = 3000;
const segredo = "dfghjk45yh8o098760oyuikjhg&";
app.use(express.json());


app.get("/", (req,res) => {
    res.send("hello world");

});

app.use('/usuario', usuario);

app.post("/login", async (req,res)=> {
    try{
        const {email,senha} =req.body;
        const user = await authService.loginService(email);

        if(senha != user.senha){
            return res.status(400).send({message: "senha invalida"});
        }
        const token = authService.generateToken(user.id,segredo);
        res.status(200).send({
            user,
            token,
        });
    }catch(err){
        console.log(`erro: ${err}`);
    }
});

app.get("/teste-token", (req,res) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({message: "token nao informado"})
    }
    
    const parts = authHeader.split(" ");

    if(parts.length !==2){
        return res.status(401).send({message: "token invalido"});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/.test(scheme)){
        return res.status(401).send({message: "token mal formatado"});

    }

    jwt.verify(token,segredo, async (err, decode) => {
        if(err){
            console.log(`erro: ${err}`);
            return res.status(500).send({message: "erro interno, tente novamente"});
        }
        console.log(decode);
        res.send(decode);
    })



})
app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
});