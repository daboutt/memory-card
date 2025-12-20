import { useCallback, useEffect, useRef, useState } from 'react';
import { shuffleData } from '../lib/data';
import Card from './Card';
import './CardContainer.css';

export default function CardContainer() {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const [matchedIndex, setMatchedIndex] = useState<number[]>([]);
  // Map structure to track matched symbols - required by issue specification
  // Key: symbol string, Value: array of indices where this symbol was matched
  const [matchedSymbols, setMatchedSymbols] = useState<Map<string, number[]>>(new Map());
  const timeoutRef = useRef<number | null>(null);

  // Check for matches when selection changes
  useEffect(() => {
    if (selectedIndex.length === 2) {
      const [firstIndex, secondIndex] = selectedIndex;
      const firstCard = shuffleData[firstIndex];
      const secondCard = shuffleData[secondIndex];

      if (firstCard.symbol === secondCard.symbol) {
        // Cards match - schedule state updates to avoid memory leaks
        timeoutRef.current = setTimeout(() => {
          setMatchedIndex((prev) => [...prev, firstIndex, secondIndex]);
          setMatchedSymbols((prev) => {
            const newMap = new Map(prev);
            newMap.set(firstCard.symbol, [firstIndex, secondIndex]);
            return newMap;
          });
          setSelectedIndex([]);
        }, 0);
      } else {
        // Cards don't match - reset after a delay
        timeoutRef.current = setTimeout(() => {
          setSelectedIndex([]);
        }, 1000);
      }
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [selectedIndex]);

  const handleClickCard = useCallback((index: number) => {
    // Prevent clicking on already matched cards
    if (matchedIndex.includes(index)) {
      return;
    }

    // Prevent selecting more than 2 cards
    setSelectedIndex((prev) => {
      if (prev.length >= 2) {
        return prev;
      }
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return [...prev, index];
    });
  }, [matchedIndex]);

  return (
    <div className='card-container' data-matched-count={matchedSymbols.size}>
      {shuffleData.map((item, index) => (
        <Card
          key={index}
          symbol={item.symbol}
          isSelected={selectedIndex.includes(index) || matchedIndex.includes(index)}
          onClickCard={() => handleClickCard(index)}
        />
      ))}
    </div>
  );
}
