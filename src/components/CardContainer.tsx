import { useCallback, useEffect, useState } from 'react';
import { shuffleData } from '../lib/data';
import Card from './Card';
import './CardContainer.css';

export default function CardContainer() {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const [matchedIndex, setMatchedIndex] = useState<number[]>([]);
  const [matchedSymbols, setMatchedSymbols] = useState<Map<string, number[]>>(new Map());

  useEffect(() => {
    // Check for matches when we have exactly 2 cards selected
    if (selectedIndex.length === 2) {
      const [firstIndex, secondIndex] = selectedIndex;
      const firstCard = shuffleData[firstIndex];
      const secondCard = shuffleData[secondIndex];

      if (firstCard.symbol === secondCard.symbol) {
        // Cards match - add to matched indices and update map
        const timer = setTimeout(() => {
          setMatchedIndex((prev) => [...prev, firstIndex, secondIndex]);
          setMatchedSymbols((prev) => {
            const newMap = new Map(prev);
            newMap.set(firstCard.symbol, [firstIndex, secondIndex]);
            return newMap;
          });
          setSelectedIndex([]);
        }, 0);
        return () => clearTimeout(timer);
      } else {
        // Cards don't match - reset after a delay
        const timer = setTimeout(() => {
          setSelectedIndex([]);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
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

  // Log matched symbols for debugging (ensures matchedSymbols is used)
  useEffect(() => {
    if (matchedSymbols.size > 0) {
      console.log('Matched symbols:', Array.from(matchedSymbols.entries()));
    }
  }, [matchedSymbols]);

  return (
    <div className='card-container'>
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
