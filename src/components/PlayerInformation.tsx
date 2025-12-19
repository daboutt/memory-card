import './PlayerInformation.css';

interface PlayerInformationProps {
  isPlayerOneTurn: boolean;
  score: {
    playerOne: number;
    playerTwo: number;
  };
}
export default function PlayerInformation({
  isPlayerOneTurn,
  score,
}: PlayerInformationProps) {
  return (
    <div className='player-infor'>
      <h2>Game player</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '7rem',
        }}
      >
        <div className={`player-1-container ${isPlayerOneTurn && 'turn'}`}>
          <div className='circle'></div>
          Player 1 ({score.playerOne})
        </div>
        <div className={`player-2-container ${!isPlayerOneTurn && 'turn'}`}>
          <div className='circle'></div>
          Player 2 ({score.playerTwo})
        </div>
      </div>
    </div>
  );
}
