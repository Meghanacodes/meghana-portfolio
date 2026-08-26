import { useState } from "react";

function TicTacToe() {

  const [board, setboard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);

  const [currentPlayer, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [computerThinking, setComputerThinking] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [gameNumber, setGameNumber] = useState(1);


  const winningCommbination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ];


  // Check winner
  const checkWinner = (board) => {

    for (let combination of winningCommbination) {

      const [a, b, c] = combination;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  };


  // Check draw
  const checkDraw = (board) => {
    return board.every((cell) => cell !== "");
  };


  // Get empty squares
  const getAvailableMoves = (board) => {

    return board
      .map((cell, index) => cell === "" ? index : null)
      .filter(index => index !== null);

  };


  // Computer logic
  const computerMove = (currentBoard) => {

    const availableMoves = getAvailableMoves(currentBoard);

    if (availableMoves.length === 0) {
      return;
    }

    // Make every alternate game forgiving without exposing difficulty in the UI.
    if (gameNumber % 2 === 0) {
      return availableMoves[
        Math.floor(Math.random() * availableMoves.length)
      ];
    }

    // 1. Try to win
    for (const move of availableMoves) {

      const testBoard = [...currentBoard];

      testBoard[move] = "O";

      if (checkWinner(testBoard) === "O") {
        return move;
      }
    }


    // 2. Block player
    for (const move of availableMoves) {

      const testBoard = [...currentBoard];

      testBoard[move] = "X";

      if (checkWinner(testBoard) === "X") {
        return move;
      }
    }


    // 3. Take center
    if (currentBoard[4] === "") {
      return 4;
    }


    // 4. Take a corner
    const corners = [0, 2, 6, 8];

    const availableCorners = corners.filter(
      (corner) => currentBoard[corner] === ""
    );

    if (availableCorners.length > 0) {

      return availableCorners[
        Math.floor(Math.random() * availableCorners.length)
      ];

    }


    // 5. Take any available square
    return availableMoves[
      Math.floor(Math.random() * availableMoves.length)
    ];

  };


  // Player click
  const handleClick = (index) => {

    // Don't allow invalid moves
    if (
      board[index] !== "" ||
      winner ||
      computerThinking
    ) {
      return;
    }


    // Player move
    const newBoard = [...board];

    newBoard[index] = "X";

    setboard(newBoard);


    // Check player winner
    const playerWinner = checkWinner(newBoard);

    if (playerWinner) {

      setWinner(playerWinner);

      return;
    }


    // Check draw
    if (checkDraw(newBoard)) {

      setWinner("Draw");

      return;
    }


    // Computer turn
    setPlayer("O");

    setComputerThinking(true);


    setTimeout(() => {

      const botMove = computerMove(newBoard);

      const boardAfterBot = [...newBoard];

      boardAfterBot[botMove] = "O";

      setboard(boardAfterBot);


      // Check computer winner
      const botWinner = checkWinner(boardAfterBot);

      if (botWinner) {

        setWinner(botWinner);

        setComputerThinking(false);

        return;
      }


      // Check draw
      if (checkDraw(boardAfterBot)) {

        setWinner("Draw");

        setComputerThinking(false);

        return;
      }


      // Player turn again
      setPlayer("X");

      setComputerThinking(false);

    }, 600);

  };


  // Reset game
  const resetGame = () => {

    setboard([
      "", "", "",
      "", "", "",
      "", "", ""
    ]);

    setPlayer("X");

    setWinner(null);

    setComputerThinking(false);

    setGameNumber((currentGame) => currentGame + 1);
  };

  const startGame = (event) => {
    event.preventDefault();

    const trimmedName = nameInput.trim();

    if (trimmedName) {
      setPlayerName(trimmedName);
    }
  };

  if (!playerName) {
    return (
      <section id="tictactoe" className="game-welcome">
        <p className="game-welcome-label">TIC TAC TOE</p>
        <h1>Ready to play?</h1>
        <p className="game-subtitle">Tell Meghana Bot who it is playing against.</p>

        <form className="game-name-form" onSubmit={startGame}>
          <label htmlFor="player-name">Your name</label>
          <input
            id="player-name"
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
            placeholder="Enter your name"
            maxLength={30}
            autoFocus
            required
          />
          <button type="submit" className="reset-game">Start Game</button>
        </form>
      </section>
    );
  }


  return (
     <>
    {winner && winner !== "Draw" && (
      <div className="confetti">
        {Array.from({ length: 40 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    )}
    <section id="tictactoe">

      <h1>{playerName} vs Meghana</h1>

      <p className="game-subtitle">
        Can you beat my bot? 🤖
      </p>


      {/* Game status */}

      {!winner && (
        <p className="game-status">

          {computerThinking
            ? "Meghana Bot is thinking... 🤖"
            : "Your turn — you're X"}

        </p>
      )}


      {/* Board */}

      <div className="game-board">

        {board.map((cell, index) => (

          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={cell !== "" || computerThinking || winner}
          >
            {cell}
          </button>

        ))}

      </div>


      {/* Result */}

      {winner && (

        <div className="game-result">

          {winner === "Draw"
            ? "It's a Draw!"
            : `${winner === "X" ? "You" : "Meghana"} Wins! 🎉`
          }

        </div>

      )}


      {/* Reset */}

      <button
        className="reset-game"
        onClick={resetGame}
      >
        Play Again
      </button>

    </section>
    </>
  );
}

export default TicTacToe;
