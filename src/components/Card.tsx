import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  symbol: string;
}
export default function Card({ symbol }: CardProps) {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className='card'>
      {symbol}
    </motion.div>
  );
}
