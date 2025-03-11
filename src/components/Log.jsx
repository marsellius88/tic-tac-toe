export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((item) => {
        const { square, player } = item;
        const { row, col } = square;
        return (
          <li key={`${row}${col}`}>
            {player} selected {row + 1},{col + 1}
          </li>
        );
      })}
    </ol>
  );
}
