const minX = 0;
const maxX = 6;
const minY = -1;
const maxY = 1;

function start() {
  const userFunction = document.getElementById("user_function");
  const canvas = document.getElementById("canvas");

  const calculate = () => Function("x", "return " + userFunction.value); //eval vs Function: eval is built multiple times and with Function once with display

  const handler = (_event) => {
    // convention: _event is not used
    display(canvas, calculate()); // x is needed for right variable
  };

  handler();
  userFunction.onchange = handler;

  /*
  // todo: how to display?
  display(canvas, (x) => eval(userFunction.value)); 

  userFunction.onchange = () => {
    display(canvas, (x) => eval(userFunction.value));
  };
  */

  /*
  const f = (_event) => {
    // convention: _event is not used
    display(canvas, (x) => eval(userFunction.value)); // x is needed for right variable
  };
  */
}

function display(canvas, f) {
  // clear
  const context = canvas.getContext("2d");
  context.fillStyle = "papayawhip";
  context.fillRect(0, 0, canvas.width, canvas.height);
  // draw the function plot
  const normx = normalizeX(canvas.width);
  const normy = normalizeY(canvas.height);

  context.fillStyle = "black";
  context.beginPath();
  context.moveTo(normx(minX), normy(f(minX)));

  const stride = (maxX - minX) / 100; // 100 Stützstellen
  for (let x = minX; x <= maxX; x += stride) {
    context.lineTo(normx(x), normy(f(x)));
    context.stroke();
  }
}

const normalizeY = (height) => (y) => {
  const scaleFactor = height / (maxY - minY);
  return height - (y - minY) * scaleFactor;
};

const normalizeX = (width) => (x) => {
  const scaleFactor = width / (maxX - minX);
  return (x - minX) * scaleFactor;
};
