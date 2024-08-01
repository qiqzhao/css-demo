let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

let snake = [];

let direction = {
  x: -1,
  y: 0,
};

let food = {};

let game = () => {
  snake = [];

  for (let i = 0; i < 5; i++) {
    snake.push({
      x: 10,
      y: 10,
    });

    food = {
      x: parseInt(Math.random() * 20),
      y: parseInt(Math.random() * 20),
    };
  }
};

let draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(241, 242, 246, 0.8)";

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      context.fillRect(i * 30, j * 30, 28, 28);
    }
  }

  context.fillStyle = "rgba(37, 53, 66, 0.8)";
  for (let i = 0; i < snake.length; i++) {
    s = snake[i];
    context.fillRect(s.x * 30, s.y * 30, 28, 28);
    if (s.x === snake[0].x && s.y === snake[0].y && i != 0) {
      alert("game over");
      game();
    }
  }

  context.fillStyle = "rgba(55, 65, 250, 0.8)";
  context.fillRect(food.x * 30, food.y * 30, 28, 28);
};

let move = () => {
  let currentSnake = {};

  switch (snake[0].x + direction.x) {
    case -1:
      currentSnake.x = 19;
      break;
    case 20:
      currentSnake.x = 0;
      break;
    default:
      currentSnake.x = snake[0].x + direction.x;
  }

  switch (snake[0].y + direction.y) {
    case -1:
      currentSnake.y = 19;
      break;
    case 20:
      currentSnake.y = 0;
      break;
    default:
      currentSnake.y = snake[0].y + direction.y;
  }

  console.log("dd", currentSnake);
  snake.splice(0, 0, {
    x: currentSnake.x,
    y: currentSnake.y,
  });

  if (snake[0].x === food.x && snake[0].y === food.y) {
    food = {
      x: parseInt(Math.random() * 20),
      y: parseInt(Math.random() * 20),
    };
    snake.push(snake[-1]);
  }

  snake.pop();

  draw();
};

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (direction.y != 1) {
        direction.y = -1;
        direction.x = 0;
      }
      break;
    case "ArrowDown":
      if (direction.y != -1) {
        direction.y = 1;
        direction.x = 0;
      }
      break;
    case "ArrowLeft":
      if (direction.x != 1) {
        direction.y = 0;
        direction.x = -1;
      }
      break;
    case "ArrowRight":
      if (direction.x != -1) {
        direction.y = 0;
        direction.x = 1;
      }
      break;
  }
});

game();
console.log(snake);
setInterval(move, 200);
