import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  symbol: string;
  isSelected: boolean;
  onClickCard?: () => void;
}
export default function Card({ symbol, isSelected, onClickCard }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateY: isSelected ? 0 : 180 }}
      className={`card ${isSelected && 'matched'}`}
      onClick={onClickCard}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isSelected ? 0 : 180 }}
        className='front-card'
      >
        {symbol}
      </motion.div>
      <motion.div initial={{ rotateY: 180 }} className='back-card'></motion.div>
    </motion.div>
  );
}
