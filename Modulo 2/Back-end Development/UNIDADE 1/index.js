class Pessoa{
    constructor(nome, sobrenome,datanascimento, altura, genero,  raca){
            this.nome = nome,
            this.sobrenome = sobrenome
            this.datanascimento = datanascimento,
            this.altura = altura,
            this.genero = genero,
            this.raca = raca
    }

    nomedatanascimento = function () {
        return this.nome + " " + this.datanascimento + " " + this.genero + " ";
    }
}

class Usuario extends Pessoa{
    constructor (nome, sobrenome, datanascimento, altura, genero,  raca, profissao, email, cpf, endereco, senha){
        super(
            nome,
            sobrenome,
            datanascimento,
            altura,
            genero,
            raca,


        );
        this.profissao = profissao,
        this.email = email,
        this.cpf = cpf,
        this.endereco = endereco,
        this.senha = senha
        
    }    
    infos = function(){
        return this.nome + " " + this.cpf + " " + this.endereco + " " + this.senha + " ";
    }
}

const user = new Usuario("junio", "Morais Lemos", "21-12-1985", 1.77, "M", "Branca", "DevOps", "junio.lemos@hotmail.com", "002585698-01", "QNL 15 Bloco H, 15", "2030#$" );

console.log(user.nomedatanascimento());
console.log(user.infos());
console.log(user);