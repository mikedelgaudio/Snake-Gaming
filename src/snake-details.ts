export const SNAKE_SPEED: number = 2;

const snakey = [{ x: "11", y: "11" }];

export function update() {
  console.log("update");
}

export function draw(board) {
  snakey.forEach((part) => {
    const snakePart = document.createElement("div");
    snakePart.style.gridRowStart = part.x;
    snakePart.style.gridColumnStart = part.y;
    snakePart.classList.add("snake");
    board.appendChild(snakePart);
  });
}
