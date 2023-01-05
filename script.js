import Game from "./Game.js";
var audio = new Audio('YXFBY9J-win (mp3cut.net).mp3');
var game = new Game();
let tiles = document.querySelectorAll(".board-tile");
let restart = document.getElementById("restart");
var state = false;
let winnerMsg = document.getElementById("winCol");
let scores =[];
alert(`you can either click on new game button for new game or wait 6s for auto restart`);
tiles.forEach((tile)=>{
    tile.addEventListener("click",(e)=>{
        game.makeMove(e.target.id);
        tile.innerHTML = game.Board[e.target.id];
        game.nextTurn();
        checkWin();
    })

})

let refresh =()=>{
    tiles.forEach((tile)=>{
        tile.innerHTML = ""
    })
    winnerMsg.innerHTML ="";
    game = new Game();
}
const checkWin = ()=>{
    const winner  = game.checkWin();
     if(winner){
        scores.push([winner]);
        winnerMsg.innerHTML = `${winner} is the Winner`;
        audio.play();
        state = true;
        setTimeout(endGame,6000);
    }
    else if(winner===null&&!game.Board.includes(null)){
        winnerMsg.innerHTML = `It's seems like a tie`;
        state = true;
    }
    else{
        return
    }
}
           
restart.onclick =  refresh;
const endGame = ()=>{
    if(state){
        winnerMsg.innerHTML ="";
        refresh();
    }
}


