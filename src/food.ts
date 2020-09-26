import { expandSnake, onSnake } from "./snake-details.js";

let powerUp = { x: 10, y: 1 };

// How big eating one power up
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(powerUp)) {
    expandSnake(EXPANSION_RATE);
    powerUp = { x: 20, y: 10 };
  }
}

export function draw(board) {
  const powerUpPart = document.createElement("div");
  powerUpPart.style.gridRowStart = <string>(<unknown>powerUp.y);
  powerUpPart.style.gridColumnStart = <string>(<unknown>powerUp.x);
  powerUpPart.classList.add("snake-power");
  board.appendChild(powerUpPart);
}
