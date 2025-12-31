import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  symbol: string;
  isSelected: boolean;
  isMatch: boolean;
  onClickCard?: () => void;
}

export default function Card({
  symbol,
  isSelected,
  isMatch,
  onClickCard,
}: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateY: isSelected ? 0 : 180 }}
      className={`card ${isMatch && 'matched'}`}
      onClick={onClickCard}
      transition={{
        duration: 0.8,
        type: 'spring',
      }}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isSelected ? 0 : 180 }}
        className='front-card'
        transition={{
          duration: 0.8,
          type: 'spring',
        }}
      >
        {symbol}
      </motion.div>
      <motion.div
        initial={{ rotateY: 180 }}
        className='back-card'
        transition={{
          duration: 0.8,
          type: 'spring',
        }}
      ></motion.div>
    </motion.div>
  );
}
