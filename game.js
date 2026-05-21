export const Direction = {
  Up: { x: 0, y: -1 },
  Down: { x: 0, y: 1 },
  Left: { x: -1, y: 0 },
  Right: { x: 1, y: 0 },
};

export function createInitialState({ cols = 20, rows = 20, rng = Math.random } = {}) {
  const startX = Math.floor(cols / 2);
  const startY = Math.floor(rows / 2);
  const snake = [
    { x: startX, y: startY },
    { x: startX - 1, y: startY },
    { x: startX - 2, y: startY },
  ];

  const food = spawnFood({ cols, rows, snake, rng });

  return {
    cols,
    rows,
    snake,
    direction: Direction.Right,
    nextDirection: Direction.Right,
    food,
    score: 0,
    gameOver: false,
    paused: true,
    rng,
  };
}

export function setDirection(state, direction) {
  if (!direction) return state;
  if (isOpposite(direction, state.direction)) {
    return state;
  }
  return {
    ...state,
    nextDirection: direction,
  };
}

export function togglePause(state) {
  if (state.gameOver) return state;
  return { ...state, paused: !state.paused };
}

export function restart(state) {
  return createInitialState({ cols: state.cols, rows: state.rows, rng: state.rng });
}

export function step(state) {
  if (state.gameOver || state.paused) return state;

  const direction = state.nextDirection;
  const head = state.snake[0];
  const nextHead = { x: head.x + direction.x, y: head.y + direction.y };

  if (isOutOfBounds(nextHead, state.cols, state.rows)) {
    return { ...state, gameOver: true };
  }

  const willGrow = state.food && positionsEqual(nextHead, state.food);
  if (hitsSnake(nextHead, state.snake, willGrow)) {
    return { ...state, gameOver: true };
  }

  const nextSnake = willGrow
    ? [nextHead, ...state.snake]
    : [nextHead, ...state.snake.slice(0, -1)];

  let nextFood = state.food;
  let nextScore = state.score;
  let gameOver = false;

  if (willGrow) {
    nextScore += 1;
    nextFood = spawnFood({ cols: state.cols, rows: state.rows, snake: nextSnake, rng: state.rng });
    if (!nextFood) {
      gameOver = true;
    }
  }

  return {
    ...state,
    snake: nextSnake,
    direction,
    nextDirection: direction,
    food: nextFood,
    score: nextScore,
    gameOver,
  };
}

export function spawnFood({ cols, rows, snake, rng }) {
  if (snake.length >= cols * rows) return null;
  const occupied = new Set(snake.map(keyFor));

  while (true) {
    const x = Math.floor(rng() * cols);
    const y = Math.floor(rng() * rows);
    const key = `${x},${y}`;
    if (!occupied.has(key)) {
      return { x, y };
    }
  }
}

function isOpposite(a, b) {
  return a.x === -b.x && a.y === -b.y;
}

function isOutOfBounds(pos, cols, rows) {
  return pos.x < 0 || pos.y < 0 || pos.x >= cols || pos.y >= rows;
}

function hitsSnake(head, snake, willGrow) {
  const limit = willGrow ? snake.length : snake.length - 1;
  for (let i = 0; i < limit; i += 1) {
    if (positionsEqual(head, snake[i])) {
      return true;
    }
  }
  return false;
}

function positionsEqual(a, b) {
  return a.x === b.x && a.y === b.y;
}

function keyFor(pos) {
  return `${pos.x},${pos.y}`;
}
