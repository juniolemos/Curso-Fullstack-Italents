class Pessoa{
    constructor(nome, sobrenome,idade, altura, genero,  raca){
            this.nome = nome,
            this.sobrenome = sobrenome
            this.idade = idade,
            this.altura = altura,
            this.genero = genero,
            this.raca = raca
    }

    nomeIdade = function () {
        return this.nome + " " + this.idade + " " + this.genero + " ";
    }
}

class Usuario extends Pessoa{
    constructor (nome, sobrenome, idade, altura, genero,  raca, profissao, email, cpf, endereco){
        super(
            nome,
            sobrenome,
            idade,
            altura,
            genero,
            raca,


        );
        this.profissao = profissao,
        this.email = email,
        this.cpf = cpf,
        this.endereco = endereco
        
    }    
    infos = function(){
        return this.nome + " " + this.cpf + " " + this.endereco + " ";
    }
}

const user = new Usuario("junio", "Morais Lemos", 37, 1.77, "M", "Branca", "DevOps", "junio.lemos@hotmail.com", "002585698-01", "QNL 15 Bloco H, 15" );

console.log(user.nomeIdade());
console.log(user.infos());
console.log(user);