import { SNAKE_SPEED as speed, draw as drawE, update as updateE } from "./snake-details.js";

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
  const secondSinceLastRender: number = (time - lastRenderTime) / 3000;
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
  updateE();
}

function draw() {
  if (board !== null) drawE(board);
}
