const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600
let fibs = [1, 1]
let scale = 1
let minScale

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  angleMode(DEGREES)
  initFibs()
  setMinScale()
}

function draw() {
  background(255); // Set background to white
  translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)

  for (let i = 0; i < fibs.length; i++) {
    const fib = fibs[i] * scale;

    // Use black stroke and no fill for rectangles and arcs
    stroke(0);
    noFill();

    rect(0, 0, fib, fib);
    arc(fib, 0, 2 * fib, 2 * fib, 90, 180);
    translate(fib, fib);
    rotate(-90);
  }

  if (scale <= minScale) {
    fibs = [1, 1];
    initFibs();
    scale = 1;
  } else {
    scale *= 0.99;
  }
}

function addFib() {
  const fibLen = fibs.length;
  fibs.push(fibs[fibLen - 1] + fibs[fibLen - 2]);
}

function initFibs() {
  for (let i = 0; i < 25; i++) {
    addFib();
  }
}

function setMinScale() {
  const fibLen = fibs.length;
  minScale = fibs[fibLen - 5] / fibs[fibLen - 1];
}
