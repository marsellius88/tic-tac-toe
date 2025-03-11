export function GameOver({ winner, onRematchClick }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw</p>}
      <button onClick={onRematchClick}>Rematch!</button>
    </div>
  );
}
