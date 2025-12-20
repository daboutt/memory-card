# 🃏 Memory Card

A two-player memory card matching game built with React 19, TypeScript, and Vite. Test your memory by flipping cards and finding matching pairs!

## Features

- **Two-player mode** — Compete with a friend, taking turns to find matching pairs
- **Score tracking** — Keep track of each player's matched pairs
- **Smooth animations** — Card flip animations powered by [Motion](https://motion.dev/)
- **24 unique emoji cards** — 48 cards total (24 pairs) for a challenging game
- **Turn indicator** — Visual indicator showing whose turn it is
- **Reset game** — Start a new game anytime with the reset button

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm, yarn, or pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd memory-card
npm install
```

### Running the Game

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to play the game.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## How to Play

1. **Player 1 starts** — Click any card to flip it
2. **Flip a second card** — Try to find a matching emoji
3. **Match found?** — The current player scores a point and gets another turn
4. **No match?** — Cards flip back and it's the other player's turn
5. **Game ends** — When all pairs are found, the player with the most matches wins!

## Tech Stack

| Technology                                    | Purpose                 |
| --------------------------------------------- | ----------------------- |
| [React 19](https://react.dev/)                | UI framework            |
| [TypeScript](https://www.typescriptlang.org/) | Type safety             |
| [Vite](https://vite.dev/)                     | Build tool & dev server |
| [Motion](https://motion.dev/)                 | Animations              |
| [ESLint](https://eslint.org/)                 | Code linting            |

## Project Structure

```
src/
├── components/
│   ├── Card.tsx           # Individual card with flip animation
│   ├── CardContainer.tsx  # Game board grid with card logic
│   └── PlayerInformation.tsx  # Score display and turn indicator
├── hooks/
│   └── useGamePlay.ts     # Game state management hook
├── lib/
│   ├── data.ts            # Card data and shuffle logic
│   └── type.ts            # TypeScript type definitions
├── App.tsx                # Main application component
└── main.tsx               # Application entry point
```
