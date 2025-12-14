import { shuffle } from '../lib/data';
import Card from './Card';
import './CardContainer.css';

export default function CardContainer() {
  return (
    <div className='card-container'>
      {shuffle().map((item) => (
        <Card key={item.id} symbol={item.symbol} />
      ))}
    </div>
  );
}
