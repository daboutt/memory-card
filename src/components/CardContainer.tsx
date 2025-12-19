import { useCallback, useEffect, useState } from 'react';
import { shuffleData } from '../lib/data';
import Card from './Card';
import './CardContainer.css';
import type { CardType } from '../lib/type';

type SelectCard = CardType & {
  index: number;
};
export default function CardContainer() {
  const [indexSelected, setIndexSelected] = useState<number[]>([]);
  const [firstSelectedCard, setFirstSelectedCard] = useState<SelectCard>();
  const [secondSelectedCard, setSecondSelectedCard] = useState<SelectCard>();
  const [matchList, setMatchList] = useState<number[]>([]);

  const handleClickCard = useCallback(
    (card: SelectCard) => {
      if (firstSelectedCard) {
        setSecondSelectedCard(card);
        setTimeout(() => {
          if (
            firstSelectedCard.symbol === card.symbol &&
            firstSelectedCard.index !== card.index
          ) {
            setMatchList((prev) => [
              ...prev,
              firstSelectedCard.index,
              card.index,
            ]);
          }
          setFirstSelectedCard(undefined);
          setSecondSelectedCard(undefined);
        }, 200);
      } else {
        setFirstSelectedCard(card);
      }
    },
    [firstSelectedCard]
  );

  return (
    <div className='card-container'>
      {shuffleData.map((item, i) => (
        <Card
          key={i}
          symbol={item.symbol}
          isSelected={
            matchList.includes(i) ||
            secondSelectedCard?.index === i ||
            firstSelectedCard?.index === i
          }
          onClickCard={() => handleClickCard({ ...item, index: i })}
        />
      ))}
    </div>
  );
}
