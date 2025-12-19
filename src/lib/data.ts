import type { CardType } from './type';

export const data: CardType[] = [
  { id: 1, symbol: '👾' },
  { id: 2, symbol: '👓' },
  { id: 3, symbol: '🛌🏻' },
  { id: 4, symbol: '🌝' },
  { id: 5, symbol: '🍓' },
  { id: 6, symbol: '🍅' },
  { id: 7, symbol: '👀' },
  { id: 8, symbol: '🥼' },
  { id: 9, symbol: '🦄' },
  { id: 10, symbol: '🐙' },
  { id: 11, symbol: '🦋' },
  { id: 12, symbol: '🌈' },
  { id: 13, symbol: '🔥' },
  { id: 14, symbol: '💎' },
  { id: 15, symbol: '🎸' },
  { id: 16, symbol: '🚀' },
  { id: 17, symbol: '🎭' },
  { id: 18, symbol: '🍕' },
  { id: 19, symbol: '🎯' },
  { id: 20, symbol: '🦊' },
  { id: 21, symbol: '🐳' },
  { id: 22, symbol: '🌸' },
  { id: 23, symbol: '⚡' },
  { id: 24, symbol: '🎪' },
  // { id: 25, symbol: '🍩' },
  // { id: 26, symbol: '🎨' },
  // { id: 27, symbol: '🦁' },
];
export const duplicatedData = data.flatMap((item) => [item, item]);

export const shuffle = (array: typeof duplicatedData) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getShuffledData = () => shuffle(duplicatedData);
