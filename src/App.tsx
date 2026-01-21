import { useRef, useState } from 'react';
import GameControl from './GameControl';
import CardContainer, {
  type CardContainerRef,
} from './components/CardContainer';
import { useGamePlay } from './hooks/useGamePlay';
import './App.css';

function App() {
  const cardContainerRef = useRef<CardContainerRef>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [shuffleDone, setShuffleDone] = useState(false);

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
        shuffleDone={shuffleDone}
      />

      <CardContainer
        ref={cardContainerRef}
        handleTogglePlayerTurn={handleTogglePlayerTurn}
        handleAddScore={handleAddScore}
        isResetting={isResetting}
        setIsResetting={setIsResetting}
        setShuffleDone={setShuffleDone}
      />
    </>
  );
}

export default App;
