import { useState } from 'react';
import { shuffleData } from '../lib/data';
import Card from './Card';
import './CardContainer.css';

export default function CardContainer() {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  return (
    <div className='card-container'>
      {shuffleData.map((item, index) => (
        <Card
          key={index}
          symbol={item.symbol}
          isSelected={selectedIndex.includes(index)}
          onClickCard={() => {
            setSelectedIndex((prev) => {
              if (prev.includes(index)) {
                return prev.filter((i) => i !== index);
              }
              return [...prev, index];
            });
          }}
        />
      ))}
    </div>
  );
}
