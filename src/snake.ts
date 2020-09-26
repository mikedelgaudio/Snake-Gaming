import { SNAKE_SPEED as speed, draw as drawSnake, update as updateSnake } from "./snake-details.js";
import { update as updateFood, draw as drawFood } from "./food.js";
let lastRenderTime: number = 0;
const board = document.querySelector(".game-board");

/**
 * Main Game Loop
 * Works on render speed
 * @param time current time
 */
function main(time) {
  // What is the current time to render frame
  window.requestAnimationFrame(main);
  const secondSinceLastRender: number = (time - lastRenderTime) / 1000;
  // Number of seconds between each move
  if (secondSinceLastRender < 1 / speed) return;
  console.log("Render");
  // Reset render time
  lastRenderTime = time;

  update();

  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  if (board !== null) {
    board.innerHTML = "";
    drawSnake(board);
    drawFood(board);
  }
}
