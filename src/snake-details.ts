import { getInput } from "./input.js";

export const SNAKE_SPEED: number = 8;

const snakey = [{ x: 11, y: 11 }];
let newSegments: number = 0;

export function update() {
  const input = getInput();
  for (let i = snakey.length - 2; i >= 0; i--) {
    // Move to wear the parent's original body part was
    snakey[i + 1] = { ...snakey[i] };
  }

  snakey[0].x += input.x;
  snakey[0].y += input.y;
}

export function draw(board): void {
  snakey.forEach((part) => {
    const snakePart = document.createElement("div");
    snakePart.style.gridRowStart = <string>(<unknown>part.y);
    snakePart.style.gridColumnStart = <string>(<unknown>part.x);
    snakePart.classList.add("snake");
    board.appendChild(snakePart);
  });
}

/**
 *
 * @param amount expansion rate per power up
 */
export function expandSnake(amount): void {
  newSegments += amount;
}

/**
 * Determine if the snake and powerup are colliding
 * @param powerUpPosition where the food is located
 */
export function onSnake(powerUpPosition) {
  return snakey.some((part) => {
    return equalPositions(part, powerUpPosition);
  });
}

/**
 * Helper functions if the part of the snake
 * and the powerup position colide
 * return true
 * @param part part of the snake
 * @param position a powerup position
 */
function equalPositions(part, position): boolean {
  return part.x === position.x && part.y === position.y;
}
