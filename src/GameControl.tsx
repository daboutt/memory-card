import { motion } from 'framer-motion';
import LoadingIcon from './assets/refresh.svg';
import PlayerInformation from './components/PlayerInformation';
import './GameControl.css';

export default function GameControl({
  isFirstPlayerTurn,
  score,
  handleReset,
  shuffleDone,
}: {
  isFirstPlayerTurn: boolean;
  score: {
    playerOne: number;
    playerTwo: number;
  };
  handleReset: () => void;
  shuffleDone: boolean;
}) {
  return (
    <div className="gameplay">
      <PlayerInformation isPlayerOneTurn={isFirstPlayerTurn} score={score} />

      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`reset-button ${shuffleDone ? 'disabled' : ''}`}
        onClick={handleReset}
        disabled={shuffleDone}
      >
        {shuffleDone ? (
          <motion.img
            src={LoadingIcon}
            alt="Loading"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        ) : (
          'Reset game'
        )}
      </motion.button>
    </div>
  );
}
