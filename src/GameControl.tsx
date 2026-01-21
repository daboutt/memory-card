import { motion } from 'framer-motion';
import PlayerInformation from './components/PlayerInformation';
import './GameControl.css';

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
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="reset-button"
        onClick={handleReset}
      >
        Reset Game
      </motion.button>
    </div>
  );
}
