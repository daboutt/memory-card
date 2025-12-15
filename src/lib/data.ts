export const data = [
  { id: 1, symbol: '👾' },
  { id: 2, symbol: '👓' },
  { id: 3, symbol: '🛌🏻' },
  { id: 4, symbol: '🌝' },
  { id: 5, symbol: '🍓' },
  { id: 6, symbol: '🍅' },
];
export const duplicatedData = data.flatMap((item) => [item, item]);

const shuffle = (array: typeof duplicatedData) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const shuffleData = shuffle(duplicatedData);
