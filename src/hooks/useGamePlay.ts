import { useCallback, useState } from 'react';

export const useGamePlay = () => {
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);
  const [score, setScore] = useState({ playerOne: 0, playerTwo: 0 });

  const handleTogglePlayerTurn = useCallback(() => {
    setIsFirstPlayerTurn(!isFirstPlayerTurn);
  }, [isFirstPlayerTurn]);

  const handleAddScore = useCallback(() => {
    if (isFirstPlayerTurn) {
      setScore((prev) => ({ ...prev, playerOne: (prev.playerOne += 1) }));
    } else {
      setScore((prev) => ({ ...prev, playerTwo: (prev.playerTwo += 1) }));
    }
  }, [isFirstPlayerTurn]);

  const resetGame = useCallback(() => {
    setIsFirstPlayerTurn(true);
    setScore({ playerOne: 0, playerTwo: 0 });
  }, []);

  return {
    isFirstPlayerTurn,
    handleAddScore,
    handleTogglePlayerTurn,
    resetGame,
    score,
  };
};
