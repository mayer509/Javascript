export default class inputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();

          break;

        case 39:
          paddle.moveRight();

          break;

        //no default
      }
    });
  }
}