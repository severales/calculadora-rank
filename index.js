let nome = prompt("Qual o nome do seu herói? \n");
let vitorias = prompt("Quantas vitórias o herói teve? \n");
let derrotas = prompt("Quantas derrotas o herói sofreu? \n")

let saldo= calcular(vitorias, derrotas);
let rank = rankear(saldo);

console.log("O herói " + nome + " tem saldo de " + saldo + " e nível de " + rank);



function calcular (v, d) {
    return v - d;
}


function rankear (saldo) {
   let elo = ""

   if (saldo <= 10) {
        elo = "Ferro";
    } else if (saldo <= 20) {
        elo = "Bronze";
    }else if (saldo <= 50){
        elo = "Prata";
    }else if (saldo <= 80){
        elo = "Ouro";
    }else if (saldo <= 90){
        elo = "Diamante";
    }else if (saldo <= 100) {
        elo = "Lendário";
    } else {
        elo = "Imortal";
    }
    
    return elo;
}