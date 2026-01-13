import PlayerInformation from './components/PlayerInformation';

export default function GameControl({
  isFirstPlayerTurn,
  score,
  handleReset,
}: {
  isFirstPlayerTurn: boolean;
  score: {
    playerOne: number;
    playerTwo: number;
  };
  handleReset: () => void;
}) {
  return (
    <div className="gameplay">
      <PlayerInformation isPlayerOneTurn={isFirstPlayerTurn} score={score} />
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}
