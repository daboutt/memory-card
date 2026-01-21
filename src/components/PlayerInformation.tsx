import { motion } from 'framer-motion';
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
    <div className="player-infor">
      <h2>Game player</h2>
      <div className="players-container">
        <div className={`player-1-container ${isPlayerOneTurn && 'turn'}`}>
          <div>
            <div className="circle"></div>
            Player 1
          </div>
          <motion.div className="point">{score.playerOne}</motion.div>
        </div>
        <div className={`player-2-container ${!isPlayerOneTurn && 'turn'}`}>
          <div>
            <div className="circle"></div>
            Player 2
          </div>
          <div className="point">{score.playerTwo}</div>
        </div>
      </div>
    </div>
  );
}
