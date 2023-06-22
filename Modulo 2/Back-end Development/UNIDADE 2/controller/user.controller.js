const users = [
    {
        id: 1,
        nome: "Monkey D Luffy",
        profissao: "Pirata"
    },
    {
        id: 2,
        nome: "Ronaldo Nazario",
        profissao: "Fenomeno"
    },
    {
        id: 3,
        nome: "Uzumaki Naruto",
        profissao: "Hokage"
    }
]
//////////////////////////////////////////////////////////////////////////////
function finduser(req, res) {
    const id = req.params.id;
    let found = false;

    users.map( function(valor){
        if(valor.id == id){
            found = true;
            return res.send(valor);
        }
    });
    if(!found){
        res.status(404).send({message: "Nao foi encontrado"});
    }
    
}
const findAllusers = (req,res) => {
    res.send(users);
}

const createuser =(req,res)  => {
    const user = req.body;
    if(Object.keys(user).length === 0){
        return res.status(400).send({message: "O corpo da mensagem esta vazio"});

    }
    
    if(!user.id){
        return res.status(400).send({message: "O campo 'id' nao foi encontrado"})
    }
    if(!user.nome){
        return res.status(400).send({message: "O campo 'nome' nao foi encontrado"})
    }
    if(!user.profissao){
        return res.status(400).send({message: "O campo 'profissao' nao foi encontrado"})
    }


    user.nacionalidade = "brasileira"
    users.push(user);
    res.status(201).send(users);
}
////////////////////////////////////////////////////////////////////////////////////////////
const updateuser = (req,res) =>{
    const id = req.params.id;
    const user = req.body;
    let found = false;
   
    if(Object.keys(user).length === 0){
        return res.status(400).send({message: "O corpo da mensagem esta vazio"});

    }
    
    if(!user.id){
        return res.status(400).send({message: "O campo 'id' nao foi encontrado"})
    }
    if(!user.nome){
        return res.status(400).send({message: "O campo 'nome' nao foi encontrado"})
    }
    if(!user.profissao){
        return res.status(400).send({message: "O campo 'profissao' nao foi encontrado"})
    }

    users.map( function(valor, index){
        if(valor.id == id){
            found = true;
            users[index] = user;
            return res.send(user[index]);
        }
    });
    if(!found){
        res.status(404).send({message: "Nao foi encontrado"});
    }
    
}
////////////////////////////////////////
const deleteuser = (req,res) =>{
    const id = req.params.id;
    let found = false;

    users.map( function(valor, index){
        if(valor.id == id){
            found = true;
            users.splice(index,1);
            return res.send(valor);
        }
    });
    if(!found){
        res.status(404).send({message: "Nao foi encontrado"});
    }
}
module.exports = {
    finduser,
    findAllusers,
    createuser,
    updateuser,
    deleteuser,
}