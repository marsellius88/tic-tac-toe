import ticTacToeImage from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={ticTacToeImage} alt="Tic-Tac-Toe Logo" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}
