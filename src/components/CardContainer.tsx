import { useCallback, useImperativeHandle, useState, forwardRef } from 'react';
import { getShuffledData } from '../lib/data';
import Card from './Card';
import './CardContainer.css';
import type { CardType } from '../lib/type';

type SelectCard = CardType & {
  index: number;
};

export interface CardContainerRef {
  reset: () => void;
}

interface CardContainerProps {
  handleTogglePlayerTurn: () => void;
  handleAddScore: () => void;
}
const CardContainer = forwardRef<CardContainerRef, CardContainerProps>(
  ({ handleAddScore, handleTogglePlayerTurn }, ref) => {
    const [cards, setCards] = useState(() => getShuffledData());
    const [firstSelectedCard, setFirstSelectedCard] = useState<SelectCard>();
    const [secondSelectedCard, setSecondSelectedCard] = useState<SelectCard>();
    const [matchList, setMatchList] = useState<number[]>([]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setCards(getShuffledData());
        setFirstSelectedCard(undefined);
        setSecondSelectedCard(undefined);
        setMatchList([]);
      },
    }));

    const handleClickCard = useCallback(
      (card: SelectCard) => {
        if (card.index === firstSelectedCard?.index) return;
        if (firstSelectedCard) {
          setSecondSelectedCard(card);
          setTimeout(() => {
            if (firstSelectedCard.symbol === card.symbol) {
              handleAddScore();
              setMatchList((prev) => [
                ...prev,
                firstSelectedCard.index,
                card.index,
              ]);
            } else {
              handleTogglePlayerTurn();
            }
            setFirstSelectedCard(undefined);
            setSecondSelectedCard(undefined);
          }, 200);
        } else {
          setFirstSelectedCard(card);
        }
      },
      [firstSelectedCard, handleAddScore, handleTogglePlayerTurn]
    );

    return (
      <div className='card-container'>
        {cards.map((item, i) => (
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
);

export default CardContainer;
