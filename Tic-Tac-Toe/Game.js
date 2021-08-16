class Game{
    constructor(){
        this.turn = 'X'; 
        this.Board = new Array(9).fill(null);
       
    }
    findingWinningCombos(){
         const  winCombination = [
           [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]
        for(const  combination of winCombination){

            const [a,b,c] = combination;
             if(this.Board[a] &&(this.Board[a] === this.Board[b] && this.Board[a] === this.Board[c])){
                return combination;
            }
        }
        return null;
    }
    nextTurn(){ 
        if(this.turn === 'X'){ 
            this.turn ='O';  
        }
        else{
            this.turn = 'X';
        }
    }
    makeMove(index){
        if(this.Board[index]===null){
        this.Board[index] = this.turn;
        }
      
        else{
            alert("wrong move")
        }   
    }
    checkWin(){
        if(this.findingWinningCombos()!=null){
            const winCombo = this.findingWinningCombos();

        const winner = this.Board[winCombo[0]];
        return winner;
        }
        else return null;
    }    
}  
            
           


export default Game;