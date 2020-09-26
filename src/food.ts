import { expandSnake, onSnake } from "./snake-details.js";

let food = { x: 10, y: 1 };

// How big eating one power up
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 10 };
  }
}

export function draw(board) {
  const foodPart = document.createElement("div");
  foodPart.style.gridRowStart = <string>(<unknown>food.y);
  foodPart.style.gridColumnStart = <string>(<unknown>food.x);
  foodPart.classList.add("snake-power");
  board.appendChild(foodPart);
}
