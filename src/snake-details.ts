import { getInput } from "./input.js";

export const SNAKE_SPEED: number = 8;

const snakey = [{ x: 11, y: 11 }];

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

export function expandSnake(amount) {}
