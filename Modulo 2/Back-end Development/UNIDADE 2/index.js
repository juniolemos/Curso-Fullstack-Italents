//configuracoes basicas
const express = require("express");
const app = express();
const user = require("./router/user.router");

const port = 3000;
app.use(express.json());
app.use("/user",user);

app.get("/", (req,res) => {
    res.send("hello world");

});

app.get("/contato", (req,res) => {
    res.send("Nosso contato junio.lemos@hotmail.com");

}),
app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
});