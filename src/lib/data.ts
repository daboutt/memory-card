export const data = [
  { id: 1, symbol: '👾' },
  { id: 2, symbol: '👓' },
  { id: 3, symbol: '🛌🏻' },
  { id: 4, symbol: '🌝' },
  { id: 5, symbol: '🍓' },
  { id: 6, symbol: '🍅' },
];
export const shuffleData = data.flatMap((item) => [item, item]);

export const shuffle = () => {
  const array = [...shuffleData];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]];
  }
  return array;
};
