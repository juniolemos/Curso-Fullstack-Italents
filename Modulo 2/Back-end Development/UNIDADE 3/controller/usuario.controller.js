//const { default: mongoose } = require("mongoose");
const usuarioService = require("../service/usuario.service");
const mongoose = require("mongoose");


const findUsuario = async (req,res) => {
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
    //const id = req.params.id;
    let found = false;

    const usuario  = await usuarioService.findByIdUsuario(id);

    

    if(usuario != null){
        found = true;
    }

    

    
    if(!found){
      return res.status(404).send({message: "Nao foi encontrado"});
    }
    return res.status(200).send(usuario);

    }catch(err){
        console.log(`erro: ${err}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    
    }
    
}
const findAllUsuarios =  async (req,res) => {
    return res.status(200).send(await usuarioService.findAllUsuario());
}


const createUsuario = async (req,res)  => {
    const usuario = req.body;

    if(Object.keys(usuario).length === 0){
        return res.status(400).send({message: "O corpo da mensagem esta vazio"});

    }
    
    
    if(!usuario.nome){
        return res.status(400).send({message: "O campo 'nome' nao foi encontrado"})
    }
    if(!usuario.numFuncionarios){
        return res.status(400).send({message: "O campo 'numFuncionarios' nao foi encontrado"})
    }


    
    
    return res.status(201).send(await usuarioService.createUsuario(usuario));
}
////////////////////////////////////////////////////////////////////////////////////////////
const updateUsuario = async (req,res) => {
    const id = req.params.id;
    const usuario = req.body;
    //let found = false;
   
    if(Object.keys(usuario).length === 0){
        return res.status(400).send({message: "O corpo da mensagem esta vazio"});

    }
    
  
    if(!usuario.nome){
        return res.status(400).send({message: "O campo 'nome' nao foi encontrado"})
    }
    if(!usuario.numFuncionarios){
        return res.status(400).send({message: "O campo 'numFuncionarios' nao foi encontrado"})
    }

    return res.status(200).send(await usuarioService.updateUsuario(id,usuario ))

    /* usuarios.map( function(valor, index){
        if(valor.id == id){
            found = true;
            usuarios[index] = usuario;
            return res.send(usuario[index]);
        }
    }); */
    /* if(!found){
        res.status(404).send({message: "Nao foi encontrado"});
    } */
    
}
////////////////////////////////////////
const deleteUsuario = async (req,res) => {
    const id = req.params.id;
    //let found = false;
    
    return res.status(200).send(await usuarioService.deleteUsuario(id));
   
}
module.exports = {
    findUsuario,
    findAllUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}