import { useRef } from 'react';
import './App.css';
import CardContainer, {
  type CardContainerRef,
} from './components/CardContainer';
import PlayerInformation from './components/PlayerInformation';
import { useGamePlay } from './hooks/useGamePlay';

function App() {
  const cardContainerRef = useRef<CardContainerRef>(null);
  const {
    score,
    handleAddScore,
    handleTogglePlayerTurn,
    isFirstPlayerTurn,
    resetGame,
  } = useGamePlay();

  const handleReset = () => {
    resetGame();
    cardContainerRef.current?.reset();
  };

  return (
    <>
      <PlayerInformation isPlayerOneTurn={isFirstPlayerTurn} score={score} />
      <CardContainer
        ref={cardContainerRef}
        handleTogglePlayerTurn={handleTogglePlayerTurn}
        handleAddScore={handleAddScore}
      />
      <button className='reset-button' onClick={handleReset}>
        Reset Game
      </button>
    </>
  );
}

export default App;
