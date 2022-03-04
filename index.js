import Paddle from "/paddle";
import inputHandler from "/input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new inputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  paddle.update(deltaTime);
  paddle.draw(ctx);
  ctx.clearRect(0, 0, 800, 600);

  requestAnimationFrame(gameLoop);
}
gameLoop();
