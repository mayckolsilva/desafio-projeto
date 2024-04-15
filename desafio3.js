class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipo){
        let formaAtacar;
        switch (tipo){
            case "guerreiro":
                formaAtacar = "Espada";
            break;

            case "mago":
                formaAtacar = "Magia";
            break;

            case "monge":
                formaAtacar = "Artes Marciais";
            break;

            case "ninja":
                formaAtacar = "Shuriken";
            break;

            default: 
                formaAtacar = "nenhuma arma selecionada";
        }
        console.log(`O ${tipo} atacou usando ${formaAtacar}.`);
    }
}
let tipoHeroi = "monge";
let novoHeroi = new heroi("Mayckol", 29, tipoHeroi);

novoHeroi.atacar(tipoHeroi);