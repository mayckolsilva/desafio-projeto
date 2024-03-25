let vitoria=320, derrotas=110;
let ranqueada = vitoria-derrotas;

console.log("O Herói tem de saldo de " + ranqueada + " está no nível de " + ranqueadaNivel(ranqueada));

function ranqueadaNivel(ranqueadaF){
    let nivel;
    if(ranqueada < 10){
        nivel= "Ferro";
    }
    else if (ranqueada<=20){
        nivel= "Bronze";
    }
    else if (ranqueada<=50){
        nivel= "Prata";
    }
    else if (ranqueada<=80){
        nivel= "Ouro";
    }
    else if (ranqueada<=90){
        nivel= "Diamante";
    }
    else if (ranqueada<=100){
        nivel= "Lendário";
    }
    else{
        nivel= "Imortal";
    }
    return nivel
}