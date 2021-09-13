/*new Audio("sons/guitarra.wav").pla()y;*/

// Passo 1: buscar todos os elementos .player da página
// Passo 2: para cada elemento:
//      Passo 2.1: adicionar um evento de click
//      Passo 2.1.1: buscar qual arquivo de música
//      Passo 2.1.2: criar um áudio para tocar

let playElements = document.querySelectorAll(".player"); 

let players = {};

for(let i = 0; i < playElements.length; i++)
{
    playElements[i].addEventListener("click", tocarMusica);
}

function tocarMusica(evento)
{
    let qualPlayer = evento.currentTarget;
    let nomeMusica = qualPlayer.dataset.musica;

    if(players[nomeMusica] != undefined)
    {
        players[nomeMusica].pause();
    }

    players[nomeMusica] = new Audio("sons/"+nomeMusica);
    players[nomeMusica].play();
}