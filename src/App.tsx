import { useRef } from 'react';
import GameControl from './GameControl';
import CardContainer, {
  type CardContainerRef,
} from './components/CardContainer';
import { useGamePlay } from './hooks/useGamePlay';
import './App.css';

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
      <GameControl
        isFirstPlayerTurn={isFirstPlayerTurn}
        score={score}
        handleReset={handleReset}
      />

      <CardContainer
        ref={cardContainerRef}
        handleTogglePlayerTurn={handleTogglePlayerTurn}
        handleAddScore={handleAddScore}
      />
    </>
  );
}

export default App;
