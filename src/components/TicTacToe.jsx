import { useState } from "react";

function TicTacToe() {

    const [board,setboard] = useState([
        "","","",
        "","","",
        "","","",
    ]);

    const [currentPlayer,setPlayer] = useState("X");
    const [winner,setWinner] = useState(null);

    const winningCommbination = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    const checkWinner = (board) => {
        for(let combination of winningCommbination){
            const [a,b,c] = combination;
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                return board[a];
            }
        }
        return null;
        
    }

    const checkDraw = (board) => {
        return board.every(cell => cell !== "");
    } ;

    const handleClick = (index) => {
        if(board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setboard(newBoard);

        const newWinner = checkWinner(newBoard);
        if(newWinner){
            setWinner(newWinner);
        }
        else if(checkDraw(newBoard)){
            setWinner("Draw");
        }
        else{
            setPlayer(currentPlayer === "X" ? "O" : "X");
        }
    }

    const resetGame = () => {
        setboard([
            "","","",
            "","","",
            "","","",
        ]);

        setPlayer("X");

        setWinner(null);
    
    }

   return (
  <section id="tictactoe">

    <h1>Tic Tac Toe</h1>

    <div className="game-board">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>

   {winner && (
  <>
    {winner !== "Draw" && (
      <div className="confetti">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    )}

    <div className="game-result">
      {winner === "Draw"
        ? "It's a Draw!"
        : `${winner} Wins! 🎉`}
    </div>
  </>
)}

    <button
      className="reset-game"
      onClick={resetGame}
    >
      Play Again
    </button>

  </section>
);
}
export default TicTacToe;